import React, { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "./../../../public/assets/img/logo/logo_small.png";
import { ModalContext } from "../../context/modal/ModalProvider";
import { AuthContext } from "../../context/auth/AuthProvider";

import S from "./Nav_left.module.scss";
import { useClickOutside } from "../../hooks/useClickOutside";

export default function Nav_left() {
  const { openModal } = useContext(ModalContext);
  const { isAuth, currentUser, logout } = useContext(AuthContext);

  const [show, setShow] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    console.log(e);
    if (e.detail === 2) {
      console.log("double");
      openModal("signin");
    }
  }

  function openList(e) {
    setShow(!show);
  }

  return (
    <aside className={S.aside}>
      <header className={S.logo}>
        <div className={S.header_top}>
          <Image
            src={logo}
            placeholder="blur"
            alt="Logo en forme de pendule"
            width={logo.width}
            height={logo.height}
            onClick={(e) => {
              handleClick(e);
            }}
          />
        </div>

        <footer>
          <h2>David Michel</h2>
          <h2>Géobiologue</h2>
        </footer>
      </header>

      <nav>
        <ul>
          <li>
            <Link href="/">
              <a
                onClick={(e) => {
                  openList(e);
                }}
              >
                Diagnostiques
              </a>
            </Link>
            <span className={S.triangle}></span>
          </li>
          {/* SUB LIST */}

          {show && (
            <ul>
              <li>
                <Link href="/">
                  <a>Electromagnétisme</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Diagnostique Radon</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Haras - Exploitation agricole</a>
                </Link>
              </li>
            </ul>
          )}

          <li>
            <Link href="/">
              <a>Soins à distance</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Harmonisation</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Lieux sacrés</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Menhir et pierre levée</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Passeur d'âmes</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Sourcier</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
      {currentUser && (
        <footer className={S.userAccount}>
          <button
            onClick={() => {
              logout();
            }}
          >
            Se déconnecter
          </button>
          <Link href="/admin">
            <button>DashBoard</button>
          </Link>
        </footer>
      )}
    </aside>
  );
}