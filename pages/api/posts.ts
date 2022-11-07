import { NextApiRequest, NextApiResponse } from "next";
import { getPosts } from "../../scripts/utils.ts";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const posts = getPosts(2); // argument will change

  res.status(200).json(posts);
}
