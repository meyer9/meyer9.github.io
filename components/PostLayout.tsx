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
  const handleScriptRef = (node) => {
    if (node) {
      const script = document.createElement("script");
      script.src = "https://utteranc.es/client.js";
      script.async = true;
      script.crossOrigin = "anonymous";
      script.setAttribute("repo", "meyer9/meyer9.github.io");
      script.setAttribute("issue-term", "pathname");
      script.setAttribute("theme", "github-light");

      node.appendChild(script);
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
          <p className="text-gray-600 italic">Posted on {publishedDate}</p>
          {children}
          <section className="pt-4" ref={handleScriptRef}></section>
        </main>
      </MDXProvider>
    </div>
  );
};

export default PostLayout;
