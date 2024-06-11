import React from "react";
import Legal_content from "./Legal_content";
import Head from "next/head";

export default function Legal() {
  return (
    <>
      <Head>
        <title>David Michel. Géobiologie Isère 38</title>
        <meta
          name="description"
          content="Page légale du site de David Michel, géobiologue, comprenant les informations sur la confidentialité, la propriété intellectuelle et les conditions d'utilisation."
        />
        <meta
          name="keywords"
          content="David Michel, géobiologue, géobiologie, Geobiologue Isère, Géobiologue Rhöne, Géobiologue Isère,  santé environnementale, législation, confidentialité, propriété intellectuelle, conditions d'utilisation, données personnelles, formulaires d'envoi, liens hypertextes, Saint-Martin d'uriage, Rhône-Alpes,Isère,Loire, Grenoble, Lyon, Paris, Saint-Etienne"
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
