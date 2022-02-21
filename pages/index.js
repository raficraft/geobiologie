import React, { useContext } from "react";
import Head from "next/head";
import List_review from "../engine/component/form/user_review/list_review/List_review";
import User_review from "../engine/component/form/user_review/User_review";
import Heroes from "../engine/component/Heroes/Heroes";
import Image from "next/image";

import logo from "./../public/assets/svg/1.5x/logo.png";
import { ModalContext } from "../engine/context/modal/ModalProvider";
import Index_content from "./Index_content";

export default function Home() {
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
          src="gs://geobiologie-loire.appspot.com/video_7.mp4"
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
          <Index_content></Index_content>
          <List_review></List_review>
        </section>
      </main>
    </>
  );
}
