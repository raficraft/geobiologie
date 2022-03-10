import React, { useContext } from "react";
import Head from "next/head";

import { ModalContext } from "../../engine/context/modal/ModalProvider";
import Masonry from "../../engine/component/masonry/Masonry";
import Sourcier_content from "./Sourcier_content";
import HR from "../../engine/component/atomic/HR";

export default function Sourcier() {
  const { openModal } = useContext(ModalContext);

  /*** */

  function handleClick(e) {
    e.preventDefault();
    console.log(e);
    if (e.detail === 2) {
      console.log("double");
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
          <Sourcier_content></Sourcier_content>

          <HR
            css={{
              margin: "4 0",
              width: "100%",
            }}
          ></HR>

          <Masonry
            dir={["masonry/sourcier/"]}
            masonry={{
              width: `1120px`,
              column: "4",
              gap: "1rem",
            }}
          ></Masonry>
        </section>
      </main>
    </>
  );
}
