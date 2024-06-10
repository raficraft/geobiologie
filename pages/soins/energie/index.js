import Head from "next/head";
import Energie_content from "./Energie_content";
import HR from "../../../engine/component/atomic/HR";
import Masonry from "../../../engine/component/masonry/Masonry";

export default function Energie() {
  return (
    <>
      <Head>
        <title>
          Soins Énergétiques Professionnels - Boostez Votre Bien-Être et Votre
          Énergie Vitale - Isère 38
        </title>
        <meta
          name="description"
          content="Découvrez les soins énergétiques de David Michel pour rééquilibrer votre énergie vitale, harmoniser vos chakras et renforcer votre bien-être général."
        />
        <meta
          name="keywords"
          content="David Michel, loire, Rhône , isère ,soins énergétiques, énergie vitale, bien-être, rééquilibrage énergétique, harmonisation chakras, purification corps subtils, renforcement système immunitaire"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mainContent">
        <section className="content">
          <Energie_content></Energie_content>
          {/* <Masonry dir="masonry/sourcier/"></Masonry> */}
        </section>

        <HR
          css={{
            margin: "4 0",
            width: "100%",
          }}
        ></HR>

        <Masonry
          dir={["masonry/soins/", "masonry/soins/energie/"]}
          masonry={{
            width: `1120px`,
            column: "3",
            gap: "1rem",
          }}
          horizontalPadding="2rem"
        ></Masonry>
      </main>
    </>
  );
}
