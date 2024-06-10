import Head from "next/head";
import React from "react";
import HR from "../../../engine/component/atomic/HR";
import Masonry from "../../../engine/component/masonry/Masonry";
import Trans_content from "./trans_context";

export default function Transgenerationelle() {
  return (
    <>
      <Head>
        <title>
          Liens Transgénérationnels - Libérez-vous des Fardeaux Ancestraux
        </title>
        <meta
          name="description"
          content="Découvrez l'analyse transgénérationnelle avec David Michel pour comprendre et vous libérer des traumas hérités de vos ancêtres et améliorer votre bien-être global."
        />
        <meta
          name="keywords"
          content="analyse transgénérationnelle, constellations familiales, traumas hérités, bien-être émotionnel, David Michel, fardeaux ancestraux, dynamiques familiales"
        />
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
            dir={["masonry/soins/", "masonry/soins/trans/"]}
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
