import Head from "next/head";
import React from "react";
import Heroes from "../../engine/component/Heroes/Heroes";

export default function Index() {
  return (
    <>
      <Head>
        <title>David Michel. Géobiologie Loire 42</title>
        <meta name="description" content="My heart in my Art" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heroes></Heroes>
      <h1>Revue de presse</h1>
    </>
  );
}
