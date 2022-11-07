import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Post {
  data: {
    title: string;
    publishedDate: string;
  };
  content: string;
  slug: string;
}

export const getPosts = (pageIndex: number) => {
  const dirFiles = fs.readdirSync(path.join(process.cwd(), "pages", "posts"), {
    withFileTypes: true,
  });

  const posts = dirFiles
    .map((file): Post => {
      if (!file.name.endsWith(".mdx")) return;

      const fileContent = fs.readFileSync(
        path.join(process.cwd(), "pages", "posts", file.name),
        "utf-8"
      );
      const { data, content } = matter(fileContent);

      const slug = file.name.replace(/.mdx$/, "");
      return { data: data as Post["data"], content, slug };
    })
    .filter((post) => post);

  return posts;
};
