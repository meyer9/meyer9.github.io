import Head from "next/head";
import Image from "next/image";
import styles from "./Home.module.scss";

import Profile from "public/profile.jpeg";
import Link from "next/link";
import { getPosts, Post } from "../scripts/utils";
import { GetStaticPropsResult } from "next";

const PROJECTS = [
  {
    name: "pagecheck - performance monitoring for web",
    date: "2021",
    href: "//www.producthunt.com/products/pagecheck",
  },
  {
    name: "SaaS Growth Calculator",
    date: "2021",
    href: "//growthcalculator.app/",
  },
  {
    name: "postqueue - scalable postgres queue",
    date: "2021",
    href: "//github.com/meyer9/postqueue",
  },
  {
    name: "BLS12-381 Pure Go Implementation",
    date: "2020",
    href: "//github.com/meyer9/bls",
  },
  {
    name: "Graphene Blockchain",
    date: "2020",
    href: "//github.com/meyer9/graphene",
  },
  {
    name: "Ethereum Disassembler/Control Flow Analysis",
    date: "2020",
    href: "//github.com/meyer9/ethdasm",
  },
];

interface ProvidedProps {
  posts: Post[];
}

export default function Home({ posts }: ProvidedProps): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>Julian Meyer - about me, personal projects, and more...</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="flex flex-col md:flex-row items-center md:pb-8">
          <div className="pr-8 flex-shrink-0">
            <Image
              src={Profile}
              alt="Picture of me"
              className="w-48 rounded-lg shadow-md"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl leading-tight font-bold">Julian Meyer</h1>
            <h2 className="text-xl font-semibold">
              Hi there! Welcome to my blog! 👋
            </h2>
            <p>
              I&apos;m a full-stack engineer building software to help local
              restaurants manage their online presence.
            </p>
            <p>
              I enjoy exploring different areas of software engineering.
              I&apos;ve jumped from low-level cryptography to blockchain code to
              building scalable developer infrastructure. Below you&apos;ll find
              a list of projects I&apos;ve worked on recently.
            </p>
            <p>You can contact me at julianmeyer2000[at]gmail.com.</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 w-full">
          <div className="px-1 pt-6">
            <h3 className="text-lg font-semibold pb-2">
              Personal Project Stack
            </h3>
            <ul className="list-disc ml-4">
              {PROJECTS.map((project) => (
                <li className="pl-1 pb-2" key={project.name}>
                  <a href={project.href}>{project.name}</a> ({project.date})
                </li>
              ))}
            </ul>
          </div>
          <div className="px-1 pt-6">
            <h3 className="text-lg font-semibold">Recent Posts</h3>
            <div>
              <ul className="list-disc ml-4">
                {posts.map((post) => {
                  return (
                    <li className="pl-1 pb-2" key={post.slug}>
                      <Link href={`/posts/${post.slug}`} key={post.slug}>
                        {post.data.title} ({post.data.publishedDate})
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-6">
          <h3 className="text-lg font-semibold pb-2">Experience</h3>
          <p>
            In the past, I&apos;ve really enjoyed working on a variety of
            different parts of the stack. Although for some it can make sense to
            specialize, I&apos;m more of a tinkerer and enjoy playing around
            with new technologies.
          </p>
          <ul>
            <li>
              <strong>Web: </strong> Typescript, NodeJS, React, NextJS
            </li>
            <li>
              <strong>Backend: </strong> Python, Go, NodeJS, Rust, Postgres,
              Redis, MongoDB
            </li>

            <li>
              <strong>DevOps: </strong> Terraform, Kubernetes, Docker, AWS,
              Buildkite, Bash
            </li>
            <li>
              <strong>Systems Programming: </strong> Go, ARM and x86 Assembly,
              Rust, C, C++
            </li>
            <li>
              <strong>Machine Learning: </strong> Reinforcement Learning,
              Counterfactual Regret Minimization (Poker), CNNs, GANs,
              Transformers
            </li>
            <li>
              <strong>Machine Learning Libraries: </strong> Tensorflow, Keras,
              Numpy, Pandas
            </li>
          </ul>
          <h4 className="pt-2 pb-3">Work Experience</h4>
          <section className={styles.experience}>
            <p>
              <strong>Owner - Founding Engineer</strong> (March 2021 - Present)
            </p>
            <p>
              At Owner, I helped scale the engineering team from 2 engineers and
              increased product release cadence through better tooling and
              release processes.
            </p>
            <ul>
              <li>
                Helped design product development processes based on the Shape
                Up methodology (specific contributions: planning poker,
                tech/product story reviews)
              </li>
              <li>
                Integrated visibility and monitoring for web and mobile apps to
                optimize order volume.
              </li>
              <li>
                Built a product blog and newsletters to tell customers about new
                features.
              </li>
              <li>
                Lead release of website for local restaurants product which
                helped raise Series A round.
              </li>
              <li>
                Built out release automation, CI, and developer tools to ship
                products faster. Implemented API compatibility checks, iOS build
                pipeline, and migrated to a monorepo.
              </li>
            </ul>
          </section>
          <section className={styles.experience}>
            <p>
              <strong>Verkada - Software Engineer</strong> (June 2020 - April
              2021)
            </p>
            <p>
              At Verkada, I started as an intern and was hired on full-time as a
              software engineer. Over the span of a year, I shipped impactful
              features and contributed to team projects.
            </p>
            <ul>
              <li>
                Lead an effort to build a product blog and increase
                communication about new features from within the app.
              </li>
              <li>
                Joined a project to replace Oracle NetSuite with an internal
                tool and helped speed up the project to ship on time.
              </li>
              <li>
                Developed and shipped a new version of the app&apos;s home page,
                optimizing for time-to-first frame streaming performance.
              </li>
              <li>Lead a project to ship a new version of the archive page.</li>
              <li>
                Designed, built, and shipped a new search page for the app.
                Built and shipped a Three.js-based Pan-Tilt-Zoom system.
              </li>
            </ul>
          </section>
          <section className={styles.experience}>
            <p>
              <strong>Phore Blockchain - Lead Engineer</strong> (September 2017
              - September 2019)
            </p>
            <p>
              At Phore, I worked as the lead developer for the project, adding
              features on top of the Bitcoin source code and soft forking a
              running blockchain to add segregated witness (smaller signatures
              inside blocks).
            </p>
            <ul>
              <li>
                Implemented Segregated Witness upgrade to the blockchain,
                spanning hundreds of nodes.
              </li>
              <li>
                Developed next-generation blockchain from scratch with a
                composable architecture (block validation, block proposals, and
                attesters).
              </li>
              <li>
                Built out first BLS12-381 implementation in pure Go; optimized
                implementation by implementing 384-bit modular arithmetic using
                Montgomery reduction. Worked with BLS12-381 IETF standardization
                committee to implement efficient hash-to-curve functions.
              </li>
            </ul>
          </section>
        </div>

        <div className="pt-6">
          <h3 className="text-lg font-semibold pb-2">Education</h3>
          <section className={styles.experience}>
            <p>
              <strong>University of California, Santa Cruz</strong> (September
              2018 - June 2021)
            </p>
            <p>
              At UC Santa Cruz, I graduated in 3 years with a double major in
              Computer Science and Business Management Economics. Some of the
              most interesting classes I took were: machine learning, number
              theory, economics of law, accounting, and econometrics.
            </p>
          </section>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="//instagram.com/meyer9_"
          target="_blank"
          rel="noreferrer noopener"
        >
          Instagram
        </a>{" "}
        •{" "}
        <a
          href="//twitter.com/meyer9_"
          target="_blank"
          rel="noreferrer noopener"
        >
          Twitter
        </a>{" "}
        •{" "}
        <a href="//github.com/meyer9" target="_blank" rel="noreferrer noopener">
          GitHub
        </a>
      </footer>
    </div>
  );
}

export const getStaticProps = (): GetStaticPropsResult<ProvidedProps> => {
  const posts = getPosts(1); // the argument has no effect yet

  return {
    props: {
      posts,
    },
  };
};
