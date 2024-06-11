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
          Pose de Menhir et Pierres Levées - Harmonisation Énergétique
        </title>
        <meta
          name="description"
          content="Découvrez la pose de menhirs et de pierres levées avec David Michel, expert en géobiologie et harmonisation énergétique, pour revitaliser et équilibrer les espaces."
        />
        <meta
          name="keywords"
          content="pose de menhir,pose de menhir Loire, pose de mehnir Isère, pose de menhir Rhône pierres levées, harmonisation énergétique, David Michel, géobiologie, géo-poncture, énergies telluriques, énergies cosmiques, dynamisation des terrains, rééquilibrage énergétique, protection ondes négatives, amélioration productivité agricole, évaluation énergétique, activation énergétique, Rhône-Alpes, Isère, Loire, Grenoble, Lyon, Saint-Etienne"
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
