import React from "react";
import Legal_content from "./Legal_content";
import Head from "next/head";

export default function Legal() {
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
          <Legal_content></Legal_content>
        </section>
      </main>
    </>
  );
}
