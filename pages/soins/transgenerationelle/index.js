import Head from "next/head";
import React from "react";
import HR from "../../../engine/component/atomic/HR";
import Masonry from "../../../engine/component/masonry/Masonry";
import Trans_content from "./trans_context";

export default function Transgenerationelle() {
  return (
    <>
      <Head>
        <title>David Michel. Thérapie energétique</title>
        <meta name="description" content="My heart in my Art" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mainContent">
        <section className="content">
          <Trans_content></Trans_content>
          {/* <Masonry dir="masonry/sourcier/"></Masonry> */}

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
              column: "2",
              gap: "1rem",
            }}
            horizontalPadding="2rem"
          ></Masonry>
        </section>
      </main>
    </>
  );
}
