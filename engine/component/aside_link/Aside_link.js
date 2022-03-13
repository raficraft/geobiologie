import Link from "next/link";
import React, { useContext, useLayoutEffect } from "react";

import S from "./Aside_link.module.scss";
import { ModalContext } from "../../context/modal/ModalProvider";
import {
  Dashboard_icon,
  Facebook_icon,
  Logout_icon,
  Marker_icon,
  Message_icon,
  Phone_icon,
} from "../../../assets/icons/Icon_svg";
import { useClickOutside } from "../../hooks/useClickOutside";
import useMediaQuery from "../../hooks/useMediaQueries";
import { AuthContext } from "../../context/auth/AuthProvider";

export default function Aside_link() {
  const { openModal } = useContext(ModalContext);
  const { isAuth, currentUser, logout } = useContext(AuthContext);

  return (
    <aside className={S.aside_link}>
      <div className={S.aside_link_container}>
        <span className="bg_blue">
          <Link href="https://www.facebook.com/profile.php?id=100030549198574">
            <a target="_blank">
              <Facebook_icon />
            </a>
          </Link>
        </span>
        <span className="bg_yellow">
          <Marker_icon
            onClick={() => {
              openModal("map");
            }}
          />
        </span>
        <span
          className="bg_green"
          onClick={() => {
            openModal("review");
          }}
        >
          <Message_icon />
        </span>
        <span className="bg_red">
          <Link href="tel:+33683952827">
            <a>
              <Phone_icon />
            </a>
          </Link>
        </span>

        {currentUser && (
          <>
            <span className="bg_gunMetal">
              <Link href="/admin">
                <a>
                  <Dashboard_icon />
                </a>
              </Link>
            </span>
            <span className="bg_englishViolet">
              <Logout_icon
                onClick={() => {
                  logout();
                }}
              />
            </span>
          </>
        )}
      </div>
    </aside>
  );
}
