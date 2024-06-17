import Head from "next/head";
import HR from "../../../engine/component/atomic/HR";
import Masonry from "../../../engine/component/masonry/Masonry";
import Kinesiologie_content from "./Kinesiologie_content";

export default function Kinesiologie() {
  return (
    <>
      <Head>
        <title>
          Kinésiologie - La Science du Mouvement pour un Équilibre Global
        </title>
        <meta
          name="description"
          content="Découvrez la kinésiologie avec David Michel pour un rééquilibrage psycho-corporel visant à améliorer le bien-être global, tant physique que mental et émotionnel."
        />
        <meta
          name="keywords"
          content="kinésiologie, bien-être, rééquilibrage énergétique, test musculaire, approche holistique, réduction du stress, équilibre émotionnel, développement personnel"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mainContent">
        <section className="content">
          <Kinesiologie_content></Kinesiologie_content>
        </section>

        <HR
          css={{
            margin: "4 0",
            width: "100%",
          }}
        ></HR>

        <Masonry
          dir={["masonry/soins/", "masonry/soins/kine/"]}
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
