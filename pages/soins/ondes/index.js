import HR from "../../../engine/component/atomic/HR";
import Ondes_content from "./Ondes_content";
import Head from "next/head";

export default function Ondes() {
  return (
    <>
      <Head>
        <title>
          Pose de Protection Électrosensible - Protégez-vous des Interférences
          Électromagnétiques
        </title>
        <meta
          name="description"
          content="Découvrez comment la pose de protection électrosensible avec David Michel peut vous aider à vous protéger des interférences électromagnétiques et à garantir la sécurité de vos appareils électroniques."
        />
        <meta
          name="keywords"
          content="protection électrosensible, interférences électromagnétiques, EMI, RF, blindage EMI, protection RF, David Michel, films de protection solaires métallisés"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mainContent">
        <section className="content">
          <Ondes_content></Ondes_content>
        </section>

        <HR
          css={{
            margin: "4 0",
            width: "100%",
          }}
        ></HR>
      </main>
    </>
  );
}
