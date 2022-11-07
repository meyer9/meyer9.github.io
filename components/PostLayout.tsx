import { MDXProvider } from "@mdx-js/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./PostLayout.module.scss";

interface ProvidedProps {
  children: React.ReactNode;
  title: string;
  publishedDate: string;
}

const ResponsiveImage = (props) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img alt={props.alt} className={styles.image} {...props} />
);

const PostLayout = ({ children, title, publishedDate }: ProvidedProps) => {
  const date = new Date(publishedDate);

  const handleScriptRef = (node) => {
    if (node) {
      node.src = "https://utteranc.es/client.js";
      node.async = true;
      node.crossOrigin = "anonymous";
      node.setAttribute("repo", "meyer9/meyer9.github.io");
      node.setAttribute("issue-term", "pathname");
      node.setAttribute("theme", "github-light");
    }
  };

  return (
    <div className="w-full max-w-screen-md mx-auto py-8 px-4 overflow-hidden">
      <Head>
        <title>{title} - Julian Meyer&apos;s Blog</title>
        <meta name="description" content={title} />
      </Head>
      <header>
        <Link href="/">Back to Home</Link>
      </header>
      <MDXProvider
        components={{
          img: ResponsiveImage,
        }}
      >
        <main className={styles.post}>
          <h1>{title}</h1>
          <p className="text-gray-600 italic">
            Posted on {date.toLocaleDateString()}
          </p>
          {children}
          <section className="pt-4">
            <script ref={handleScriptRef}></script>
          </section>
        </main>
      </MDXProvider>
    </div>
  );
};

export default PostLayout;
