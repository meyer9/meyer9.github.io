---
title: "How to authorize user accounts to GitHub app installations"
comments: true
categories:
  - blog
  - engineering
---

Access management is extremely important in building any developer tools. In this post, I've documented the best way I've found to authenticate users to GitHub App installations.

GitHub has many different ways of authenticating users and authorizing access. GitHub Apps are a great way for organizations to manage access, but integrating apps is much more difficult than the regular OAuth flow. Worse, GitHub doesn't publish any docs on how to authenticate user accounts to installed apps.

## Steps

To authenticate with GitHub, there are three main authorizations to make: (1) authenticate a GitHub user with the backend to login, (2) authorizing a GitHub App with an organization/user to provide repo access, and (3) authorizing the GitHub user with an installation. The GitHub docs don't make this super clear unfortunately.

### GitHub's Docs

GitHub's docs don't mention the third step of authorizing the installation with the user except for a `state` parameter that can be passed to the installation:

> You can provide a state parameter in an app's installation URL to preserve the state of the application page and return people back to that state after they install, authenticate, or accept updates to your GitHub App. For example, you could use the state to correlate an installation to a user or account.

<small>
Source: <a href="//docs.github.com/en/developers/apps/managing-github-apps/installing-github-apps#authorizing-users-during-installation" target='_blank'>GitHub Docs</a>
</small>

However, the `state` parameter only verifies that a specific _installation flow_ is correlated with a user account, but not that the actual install destination is accessible by the user account.

There's a relatively simple attack if using this method. An attacker could start an installation, then call the callback with the same state, but a different installation ID. If the installation ID is the installation ID of another organization that also has the app installed, a user might be able to link an installation that they don't own.

### UX Considerations

Another issue is that if the app is already installed, the GitHub app install UI will not allow you to reinstall it and will instead show a "Configure" option.

<img src="/assets/images/configure-ss.png" alt="GitHub apps show configure if already installed" width=400 style="margin: auto; display: block;" />

If the user clicks the configure option, it takes them to the app install configuration screen instead of back to your app.

## Correlating a GitHub account with a user account

This is the best way I've found to connect a GitHub app with a user account.

Before you start, make sure you have created a GitHub app and are able to load the private key for the app into your backend along with the client ID and client secret that can be generated for the installation. Make sure you have the callback URL for your app setup and the "Request user authorization (OAuth) during installation" option enabled.

1. First, authenticate the user using a regular OAuth flow with the client ID and client secret from GitHub. You can store the resulting access token and refresh token on the user and include a unique GitHub user ID property on the user account.

   For this, we just use a simple `passport-github2` setup:

   ```typescript
   const callbackURL = `${process.env.EXTERNAL_HOST}/user/github/callback`;

   passport.use(
     new GithubStrategy(
       {
         clientID: process.env.GITHUB_CLIENT_ID,
         clientSecret: process.env.GITHUB_CLIENT_SECRET,
         callbackURL,
       },
       async (accessToken, refreshToken, res, profile, cb) => {
         // ...
       }
     )
   );
   ```

2. Next, you'll need to allow the user to either install the app or select an existing installation they have access to.

   The key piece here is the `GET /user/installations` request. This allows you to retrieve all installations the user has access to.

   You can allow the user to either select one of these existing installations and go to the next step, or install the app.

   If the user installs the app, you can redirect them to `https://github.com/apps/gantry-build/installations/new`. After selecting a location for the install, they'll be redirected back to the first callback URL you have set for the GitHub app. This callback should check that the user can access the installation ID returned by the callback.

   To check that the user has access to the installation, we just call `GET /user/installations/{installation_id}` with the user's access token to make sure the user can access this installation.

   ```typescript
   const userOctokit = await githubAppAuth({
     type: "oauth-user",
     code: code,
     factory: (options: unknown) =>
       new Octokit({
         authStrategy: createOAuthUserAuth,
         auth: options,
       }),
   });

   try {
     const { data: response } = await userOctokit.request(
       "GET /user/installations/{installation_id}/repositories",
       {
         installation_id: installationId,
       }
     );

     await Project.update(req.session.linkingProject, {
       githubInstallationID: installationId,
     });

     return res.redirect("/");
   } catch (err) {
     if ((err as AxiosError)?.response?.status === 404) {
       return res.status(401).json({ status: 401 });
     }
     throw err;
   }
   ```

3. Finally, now that a GitHub installation is linked to the user's account/project, and you know that the user who is logged in has access to the installation, you can make requests with the installation token if authorized by a user who has access to that installation.

# Conclusion

Overall, it's not overly difficult to associate a GitHub App installation with a user using the `GET /user/installations` endpoint, but the GitHub docs are not helpful in understanding this step in the installation process.

I hope this post helps someone avoid the rabbit hole of GitHub App authorization and build apps on GitHub faster.
