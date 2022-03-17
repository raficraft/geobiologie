import React from "react";
import Legal_content from "./Legal_content";
import Head from "next/Head";

export default function Legal() {
  return (
    <>
      <Head>
        <title>David Michel. Géobiologie Loire 42</title>
        <meta name="description" content="My heart in my Art" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mainContent">
        <section className="content">
          <Legal_content></Legal_content>
        </section>
      </main>
    </>
  );
}
