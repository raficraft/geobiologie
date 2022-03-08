import React from "react";
import Head from "next/head";
import CharteContent from "./CharteContent";
import HR from "../../engine/component/atomic/HR";

export default function Charte() {
  return (
    <>
      <Head>
        <title>David Michel. Géobiologie Loire 42</title>
        <meta name="description" content="My heart in my Art" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mainContent">
        <section className="content">
          <CharteContent></CharteContent>

          <HR
            css={{
              margin: "4 0",
              width: "100%",
            }}
          ></HR>
        </section>
      </main>
    </>
  );
}
