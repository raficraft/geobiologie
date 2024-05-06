import HR from "../../../engine/component/atomic/HR";
import Ondes_content from "./Ondes_content";
import Head from "next/head";

export default function Ondes() {
  return (
    <>
      <Head>
        <title>David Michel. Thérapie energétique</title>
        <meta
          name="description"
          content="Page d'acceuil du site de David michel géobiologue"
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
