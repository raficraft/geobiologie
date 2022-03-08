import React, { useContext } from "react";
import Head from "next/head";

import { ModalContext } from "../../engine/context/modal/ModalProvider";
import Masonry from "../../engine/component/masonry/Masonry";
import Geobiologie_content from "./Presentation_content";
import Presentation_content from "./Presentation_content";
import HR from "../../engine/component/atomic/HR";
import Secondary from "./Secondary";

export default function Geobiologie() {
  const { openModal } = useContext(ModalContext);

  return (
    <>
      <Head>
        <title>David Michel. Géobiologie Loire 42</title>
        <meta name="description" content="My heart in my Art" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mainContent">
        <section className="content">
          <Presentation_content></Presentation_content>

          <HR
            css={{
              margin: "4 0",
            }}
          ></HR>
        </section>

        <Masonry
          dir="masonry/presentation/"
          masonry={{
            width: `1120px`,
            column: "3",
            gap: "1rem",
          }}
          horizontalPadding="2rem"
        ></Masonry>

        <HR
          css={{
            margin: "4 0",
          }}
        ></HR>

        <section className="content">
          <Secondary></Secondary>
        </section>
      </main>
    </>
  );
}
