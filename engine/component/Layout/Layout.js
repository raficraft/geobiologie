import React, { useContext } from "react";
import Header from "../header/Header";
import Signup from "../form/Signup/Signup";
import Signin from "../form/Signin/Signin";
import { ModalContext } from "../../../engine/context/modal/ModalProvider";
import Modal_body from "../modal/Modal_body";
import Nav_alt from "../nav_alt/Nav_alt";
import Aside_link from "../aside_link/Aside_link";
import User_review from "../form/user_review/User_review";
import GoogleMap_modal from "../googleMap_modal/googleMap_modal";
import HR from "../atomic/HR";
import Footer from "../footer/Footer";
import Heroes from "../Heroes/Heroes";

import Image from "next/image";
import logo from "./../../../public/assets/svg/1.5x/logo.png";
import { AuthContext } from "../../context/auth/AuthProvider";
import Link from "next/link";

export default function Layout({ children }) {
  const { modal, openModal } = useContext(ModalContext);

  const { isAuth, currentUser, logout } = useContext(AuthContext);

  function handleClick(e) {
    e.preventDefault();
    console.log(e);
    if (e.detail === 2) {
      console.log("double");
      openModal("signin");
    }
  }

  console.log("modal", modal);

  return (
    <>
      <Aside_link></Aside_link>
      <Header></Header>

      {!currentUser && (
        <>
          <Heroes>
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
        </>
      )}

      <section className="wrapper">
        {!currentUser && (
          <>
            <article className="call_TO_action--top">
              <p>
                Appelez le{" "}
                <span className="text_red">
                  {" "}
                  <Link href="tel:+33683952827">
                    <a className="text_red text_switch">06 58 02 17 24</a>
                  </Link>
                </span>
              </p>
              <p>Intervient sur place et à distance dans toute la france.</p>
            </article>

            <HR
              css={{
                margin: "4 0",
                width: "100%",
              }}
            ></HR>
          </>
        )}

        {children}
        {modal.signup && (
          <Modal_body title="inscription" css={{ width: "320px" }}>
            <Signup />
          </Modal_body>
        )}
        {modal.signin && (
          <Modal_body title="connexion" css={{ width: "320px" }}>
            <Signin />
          </Modal_body>
        )}

        {modal.nav_alt && <Nav_alt></Nav_alt>}

        {modal.review && (
          <Modal_body title="Donner votre avis." css={{ top: "1rem" }}>
            <User_review></User_review>
          </Modal_body>
        )}

        {modal.map && (
          <Modal_body title="Coordonées">
            <GoogleMap_modal></GoogleMap_modal>
          </Modal_body>
        )}

        <HR
          css={{
            margin: "6 0",
            width: "100%",
          }}
        ></HR>

        <Footer></Footer>
      </section>
    </>
  );
}
