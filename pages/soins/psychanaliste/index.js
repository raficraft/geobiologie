import Head from "next/head";
import React from "react";
import HR from "../../../engine/component/atomic/HR";
import Masonry from "../../../engine/component/masonry/Masonry";
import Psy_content from "./Psy_content";

export default function Psychanaliste() {
  return (
    <>
      <Head>
        <title>David Michel. Thérapie energétique</title>
        <meta name="description" content="My heart in my Art" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mainContent">
        <section className="content">
          <Psy_content></Psy_content>
          {/* <Masonry dir="masonry/sourcier/"></Masonry> */}
        </section>

        <HR
          css={{
            margin: "4 0",
            width: "100%",
          }}
        ></HR>

        <Masonry
          dir="masonry/soins/"
          masonry={{
            width: `1120px`,
            column: "3",
            gap: "1rem",
          }}
          horizontalPadding="2rem"
        ></Masonry>
      </main>
    </>
  );
}
