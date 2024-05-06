import Head from "next/head";
import React from "react";
import Heroes from "../../engine/component/Heroes/Heroes";

export default function Index() {
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
      <Heroes></Heroes>
      <h1>Revue de presse</h1>
    </>
  );
}
