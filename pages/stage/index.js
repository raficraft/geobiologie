import React, { useContext } from "react";
import Head from "next/head";
import Heroes from "../../engine/component/Heroes/Heroes";
import Image from "next/image";

import { ModalContext } from "../../engine/context/modal/ModalProvider";
import Masonry from "../../engine/component/masonry/Masonry";
import Stage_content from "./Stage_content";

export default function Sourcier() {
  const { openModal } = useContext(ModalContext);

  /*** */

  function handleClick(e) {
    e.preventDefault();
    console.log(e);
    if (e.detail === 2) {
      openModal("signin");
    }
  }

  return (
    <>
      <Head>
        <title>David Michel. Géobiologie Loire 42</title>
        <meta name="description" content="My heart in my Art" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mainContent">
        <section className="content">
          <Stage_content></Stage_content>
        </section>
      </main>
    </>
  );
}
