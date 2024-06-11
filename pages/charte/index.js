import React from "react";
import Head from "next/head";
import CharteContent from "./CharteContent";
import HR from "../../engine/component/atomic/HR";

export default function Charte() {
  return (
    <>
      <Head>
        <title>David Michel. Géobiologie Isère 38</title>
        <meta
          name="description"
          content="Page d'accueil du site de David Michel, géobiologue expert, présentant la charte de la Fédération Française de Géobiologie et les principes éthiques des géobiologues."
        />
        <meta
          name="keywords"
          content="David Michel, géobiologue, Géobiologie, géobiologue Isère,  géobiologue Rhône, géobiologue Loire, santé environnementale, charte géobiologie, Fédération Française de Géobiologie, FFG, déontologie géobiologie, bien-être habitat, analyse géobiologique, perturbations géopathogènes, sourcier, radiesthésie, ondes électromagnétiques, santé énergétique, éthique géobiologue, expertise géobiologique, Rhône-Alpes,Isère,Loire, Grenoble, Lyon, Paris, Saint-Etienne"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mainContent">
        <section className="content">
          <CharteContent></CharteContent>

          <HR
            css={{
              margin: "4 0",
              width: "100%",
            }}
          ></HR>
        </section>
      </main>
    </>
  );
}
