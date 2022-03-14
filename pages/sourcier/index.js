import React from "react";
import Head from "next/head";

import Masonry from "../../engine/component/masonry/Masonry";
import Sourcier_content from "./Sourcier_content";
import HR from "../../engine/component/atomic/HR";

export default function Sourcier() {
  return (
    <>
      <Head>
        <title>David Michel. Géobiologie Loire 42</title>
        <meta name="description" content="My heart in my Art" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mainContent">
        <section className="content">
          <Sourcier_content></Sourcier_content>

          <HR
            css={{
              margin: "4 0",
              width: "100%",
            }}
          ></HR>

          <Masonry
            dir={["masonry/sourcier/"]}
            masonry={{
              width: `1120px`,
              column: "4",
              gap: "1rem",
            }}
          ></Masonry>
        </section>
      </main>
    </>
  );
}
