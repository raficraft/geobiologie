import React from "react";
import Head from "next/head";
import Stage_content from "./Stage_content";

export default function Sourcier() {
  return (
    <>
      <Head>
        <title>David Michel. Géobiologie Loire 42</title>
        <meta
          name="description"
          content="Page d'acceuil du site de David michel géobiologue"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mainContent">
        <section className="content">
          {/* <Stage_content></Stage_content> */}
        </section>
      </main>
    </>
  );
}
