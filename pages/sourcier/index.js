import React from "react";
import Head from "next/head";

import Masonry from "../../engine/component/masonry/Masonry";
import Sourcier_content from "./Sourcier_content";
import HR from "../../engine/component/atomic/HR";

export default function Sourcier() {
  return (
    <>
      <Head>
        <title>
          Mise en Place de Puits - Expertise de Sourcier pour Votre Projet d’Eau
        </title>
        <meta
          name="description"
          content="Découvrez notre service de mise en place de puits avec David Michel, sourcier expérimenté, pour garantir une analyse précise et une installation efficace de votre puits."
        />
        <meta
          name="keywords"
          content="mise en place de puits, sourcier, David Michel, analyse site puits, techniques sourcier, baguettes en Y, baguettes en L, pendule, construction puits"
        />
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
