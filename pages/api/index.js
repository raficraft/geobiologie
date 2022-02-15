// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import { promises } from "fs";
// import path from "path";

// export default async function handler(req, res) {
//   console.log("IN API dir");

//   const request = req.body;

//   //process.cwd  has Current Write directory
//   const src = path.resolve(process.cwd(), request.dir, "/");

//   try {
//     const files = await promises.readdirSync(src);

//     res.status(200).json(files);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// }

import fs from "fs";
import path from "path";

export default (req, res) => {
  const dirRelativeToPublicFolder = "assets/img/masonry/menhir";

  const dir = path.resolve("./public", dirRelativeToPublicFolder);

  const filenames = fs.readdirSync(dir);

  console.log("yolo : ", filenames);

  const images = filenames.map((name) =>
    path.join("/", dirRelativeToPublicFolder, name)
  );

  res.statusCode = 200;
  res.json(filenames);
};
