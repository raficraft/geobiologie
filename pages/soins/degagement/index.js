import React, { useContext } from "react";
import Head from "next/head";

import Degagement_content from "./Degagement_content";
import HR from "../../../engine/component/atomic/HR";
import Masonry from "../../../engine/component/masonry/Masonry";

export default function Degagement() {
  return (
    <>
      <Head>
        <title>
          Soin de Dégagement - Libérez-vous des Énergies Négatives et Retrouver
          la Sérénité - Isère 38
        </title>
        <meta
          name="description"
          content="Découvrez le soin de dégagement de David Michel pour éliminer les entités négatives, neutraliser les magies noires et rétablir l'équilibre énergétique."
        />
        <meta
          name="keywords"
          content="soin de dégagement, énergie négative, entités négatives, magie noire, envoûtements, purification énergétique, équilibre énergétique, protection aura"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mainContent">
        <section className="content">
          <Degagement_content></Degagement_content>

          <HR
            css={{
              margin: "4 0",
              width: "100%",
            }}
          ></HR>

          <Masonry
            dir={["masonry/soins/", "masonry/soins/degagement/"]}
            masonry={{
              width: `1120px`,
              column: "3",
              gap: "1rem",
            }}
            horizontalPadding="2rem"
          ></Masonry>
        </section>
      </main>
    </>
  );
}
