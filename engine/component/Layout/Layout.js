import React, { useContext } from "react";
import Header from "../header/Header";
import Signup from "../form/Signup/Signup";
import Signin from "../form/Signin/Signin";
import { ModalContext } from "../../../engine/context/modal/ModalProvider";
import Modal_body from "../modal/Modal_body";
import Nav_alt from "../nav_alt/Nav_alt";
import Nav_left from "../nav_left/Nav_left";

export default function Layout({ children }) {
  const { modal } = useContext(ModalContext);

  console.log("modal", modal);

  return (
    <>
      <>
        <Nav_left></Nav_left>
        <section className="wrapper">
          {children}
          {modal.signup && (
            <Modal_body>
              <Signup />
            </Modal_body>
          )}
          {modal.signin && (
            <Modal_body>
              <Signin />
            </Modal_body>
          )}

          {modal.nav_alt && (
            <Modal_body>
              <Nav_alt></Nav_alt>
            </Modal_body>
          )}

          <footer>
            <h1>Footer</h1>
          </footer>
        </section>
      </>
    </>
  );
}
