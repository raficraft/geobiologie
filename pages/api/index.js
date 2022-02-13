// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fs, { promises } from "fs";
import path from "path";

export default async function handler(req, res) {
  console.log("IN API dir");

  const request = req.body;

  //process.cwd  has Current Write directory
  const src = path.join(process.cwd(), request.dir);

  try {
    const files = await promises.readdir(src);

    res.status(200).json(files);
  } catch (err) {
    res.status(500).json(err);
  }
}
