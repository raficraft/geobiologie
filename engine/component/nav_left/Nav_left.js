import React from "react";
import Image from "next/image";

import S from "./Nav_left.module.scss";

import logo from "./../../../public/assets/img/logo/logo_small.png";
import Link from "next/link";

export default function Nav_left() {
  return (
    <aside className={S.aside}>
      <div className={S.logo}>
        <header>
          <Image
            src={logo}
            placeholder="blur"
            alt="Logo en forme de pendule"
            width={logo.width}
            height={logo.height}
          />
        </header>

        <footer>
          <h2>David MICHEL</h2>
          <h2>Géobilogue</h2>
          <h2>Loire - 42</h2>
        </footer>
      </div>

      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Diagnostiques</a>
            </Link>
          </li>
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
    </aside>
  );
}
