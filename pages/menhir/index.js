import React, { useContext } from "react";
import Head from "next/head";
import { ModalContext } from "../../engine/context/modal/ModalProvider";
import Masonry from "../../engine/component/masonry/Masonry";
import Menhir_content from "./Menhir_content";

export default function Menhir() {
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
          <Menhir_content></Menhir_content>
          <Masonry
            dir={["masonry/menhir/"]}
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
