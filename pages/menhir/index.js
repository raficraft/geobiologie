import React, { useContext } from "react";
import Head from "next/head";
import { ModalContext } from "../../engine/context/modal/ModalProvider";
import Masonry from "../../engine/component/masonry/Masonry";
import Menhir_content from "./Menhir_content";

export default function Menhir() {
  return (
    <>
      <Head>
        <title>David Michel. Géobiologie Loire 42</title>
        <meta name="description" content="My heart in my Art" />
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
