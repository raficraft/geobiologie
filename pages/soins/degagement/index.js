import React, { useContext } from "react";
import Head from "next/head";

import Degagement_content from "./Degagement_content";
import HR from "../../../engine/component/atomic/HR";
import Masonry from "../../../engine/component/masonry/Masonry";

export default function Degagement() {
  return (
    <>
      <Head>
        <title>David Michel. Géobiologie Loire 42</title>
        <meta name="description" content="My heart in my Art" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mainContent">
        <section className="content">
          <Degagement_content></Degagement_content>

          <HR
            css={{
              margin: "4 0",
              width: "100%",
            }}
          ></HR>

          <Masonry
            dir={["masonry/soins/", "masonry/soins/degagement/"]}
            masonry={{
              width: `1120px`,
              column: "3",
              gap: "1rem",
            }}
            horizontalPadding="2rem"
          ></Masonry>
        </section>
      </main>
    </>
  );
}
