import React, { useContext } from "react";
import Head from "next/head";
import Heroes from "../../engine/component/Heroes/Heroes";
import Image from "next/image";

import logo from "./../../public/assets/svg/1.5x/logo.png";
import { ModalContext } from "../../engine/context/modal/ModalProvider";
import Masonry from "../../engine/component/masonry/Masonry";
import Menhir_content from "./Menhir_content";

export default function Menhir() {
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
        <Heroes
          src="https://firebasestorage.googleapis.com/v0/b/geobiologie-loire.appspot.com/o/video_7.mp4?alt=media&token=660daa9e-55c4-4638-84d6-14cb737aabfb"
          video="drawing"
        >
          <div className="inside">
            <div className="inside_content">
              <div className="logo">
                <Image
                  src={logo}
                  width={logo.width}
                  height={logo.height}
                  alt="Logo en forme de pendule"
                  blurDataURL={logo.blurDataURL}
                  placeholder="blur"
                  onClick={(e) => {
                    handleClick(e);
                  }}
                />
              </div>

              <div className="heroes_title">
                <h3 className="title">David Michel</h3>
                <h3 className="subtitle">Geobiologue</h3>
              </div>
            </div>
          </div>
        </Heroes>
        <section className="content">
          <Menhir_content></Menhir_content>
          <Masonry dir="masonry/menhir/"></Masonry>
        </section>
      </main>
    </>
  );
}
