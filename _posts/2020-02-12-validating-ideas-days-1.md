---
title: "Idea Validation Day 2: First Landing Page Up and Running"
comments: true
categories:
  - blog
  - idea-validation
---

A few weeks ago, I attended a talk at my university by [Marc Randolph](https://www.marcrandolph.com/), co-founder and the first CEO of Netflix. He gave a ton of great advice about how to start a successful company. One idea that really jumped out at me was: come up with a system for validating ideas quickly. This blog series documents my attempt to validate ideas very quickly and come up with a system for validating ideas quickly.

You can find the previous post [here](https://meyer9.github.io/blog/idea%20validation/validating-ideas-days/).

First of all, you can find the short simple landing page for the first idea **[here](https://pagecheck.app/testflows)**.

# Feedback from last post

I received a few great pieces of feedback from the Indie Hackers community on [my post about the last blog](https://www.indiehackers.com/post/validating-15-ideas-in-30-days-9deb5e1e76). First, I'll start by going through the different feedback I received and aggregating it into something I can use to improve my process.

## You're going too fast.

![](/assets/images/scottworks.png)

![](/assets/images/ben_k.png)

The first great piece of advice I received from Indie Hackers was that I shouldn't spend only 2 days trying to validate the ideas.

Instead of only promoting the ideas for 2 days, I'm going to **promote the idea for a week** and see what kind of response I get. Of course, I'll leave the landing pages up throughout the project to continue to evaluate.

So, basically, instead of testing 15 ideas in 30 days, I'm going to test 15 ideas in 15 weeks.

## Talk to people to find ideas

![](/assets/images/joshtronic-1.png)

![](/assets/images/joshtronic-2.png)

Secondly, IH reader "joshtronic" asked if I was just guessing at what people want or if I'm testing features requested by my current clients.

This is a great point he brought up about where my ideas come from that I'm using for this project. At first, I'm completely guessing at what I think people might find useful based on other products I've seen my competitors build. For some reason, I can't stop thinking about the project so whenever I'm walking around and thinking about [pagecheck](https://pagecheck.app) and I think of an idea, I write it down.

![](/assets/images/ideas.png)

Since ideas are a dime a dozen, here are $1.60 worth of ideas free! Every week, I'll pick a new idea from this list and try validating it. At the bottom, you'll see the meta-idea of doing this blog series.

As I begin to talk to more of my target audience (including readers of this blog post), I'll be able to ask them about requested features and pain points of website monitoring and work those into the ideas I'm validating. Just like I'm using the feedback from the Indie Hackers post to improve my process, I'll also use feedback from the actual tests to improve my product ideas.

## How to gauge intent?

![](/assets/images/scottworks-cta.png)

IH user "Scottworks" again brings up a great point. Signing up for an email list for the product is one thing, but actually paying for the product is completely separate.

He suggests using a CTA (call-to-action) to gauge customer intent (are they actually planning to pay for the product?). I think this is a great idea I can work into future landing pages, but for now, I'm just going to assume that a certain percent of customers who sign up for an email list are going to convert into actual customers.

# Validating Idea 1: User Flows

User Flows is the first idea I'm going to try to validate. Before pagecheck, I built a much more complicated tool for testing user interaction on a website. You could record the actions that you take and then my program would playback the actions to test them.

I abandoned this project early because it was too complicated and I just wanted to get *something* launched.

Yesterday, I put together a super basic landing page that explains the value of the feature, gives some pseudo-screenshots and collects emails from possible customers.

You can find the landing page [here](https://pagecheck.app/testflows).

## Landing Page

While I don't have a ton of experience building landing pages, I know that they should communicate the value of the product very clearly.

![](/assets/images/userflows-features.png)

In this case, you can make sure your critical flows work across browsers. The value is that it saves user frustration in having to switch browsers to use your product or the amount of time spent doing support for features that don't work on certain browsers.

I tried communicate the purpose of the product very clearly on the landing page.

Then, I included the email signup form on both the top and bottom of the page so that if a user is immediately convinced, they can sign up at the top. If they read through the rest of the page and are convinced, they can sign up at the bottom.

Next, I tried to communicate to specific groups of possible users the value of the feature.

### Appealing to developers


![](/assets/images/userflows-developers.png)

For developers, the value of the feature is that they can integrate it into their CI/CD flows and make sure no changes break UI elements across browsers.

Also, they can review the impact of their pull request on the weight of the page and the loading time. For example, if a developer working on a project adds an analytics widget that causes the page size to increase by 15 kB and the load time to increase by 130 ms, pagecheck would let them know.

### Appealing to designers

![](/assets/images/userflows-designers.png)

Designers are slightly different. Usually, they work on the UI/UX of the feature instead of the code. They want to know that their UI/UX works across browsers and works well.

So, I appeal to designers by advertising that User Flows allows them to test their UI/UX across browsers to make sure nothing breaks on Firefox as they develop on Chrome. I also tell them that User Flows gives them metrics to analyze the performance of their UI/UX components.

After a user puts in their email, I add them to a mailgun mailing list and send them a welcome email asking them a few specific questions to evaluate why they want the feature.

## Welcome Email

My main goal through this entire project is to get user feedback about ideas. Welcome emails worked great for pagecheck. I got some great feedback by giving them my [personal email address](mailto:julian@pagecheck.app).

![](/assets/images/userflows-welcome-email.png)

In this case, I send a welcome email from my personal email asking possible customers what they would plan to use User Flows for. I'm hoping to get some responses from possible customers about how they'd use user flows. From there, I can determine where I can add value to those use-cases.

# Conclusion

This has been a great start to my blog series and I hope to continue to refine both my system for validating ideas and the ideas based on feedback from this blog.

You can find the previous post [here](https://meyer9.github.io/blog/idea%20validation/validating-ideas-days/).

I'm building [pagecheck](https://pagecheck.app), a front-end monitoring tool for developers. You can find the landing page for this week [here](https://pagecheck.app/testflows).
