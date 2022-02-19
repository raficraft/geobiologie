import React, { useContext } from "react";
import Header from "../header/Header";
import Signup from "../form/Signup/Signup";
import Signin from "../form/Signin/Signin";
import { ModalContext } from "../../../engine/context/modal/ModalProvider";
import Modal_body from "../modal/Modal_body";
import Nav_alt from "../nav_alt/Nav_alt";
import Nav_left from "../nav_left/Nav_left";
import Aside_link from "../aside_link/Aside_link";
import User_review from "../form/user_review/User_review";
import GoogleMap_modal from "../googleMap_modal/googleMap_modal";
import HR from "../atomic/HR";

export default function Layout({ children }) {
  const { modal } = useContext(ModalContext);

  console.log("modal", modal);

  return (
    <>
      <Aside_link></Aside_link>
      <Header></Header>
      <section className="wrapper">
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
            margin: "4 0",
            width: "100%",
          }}
        />

        <footer>
          <h1>Footer</h1>
        </footer>
      </section>
    </>
  );
}
