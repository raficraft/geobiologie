import Link from "next/link";
import React, { useContext } from "react";
import { ModalContext } from "../../../engine/context/modal/ModalProvider";
import Account_user from "../header/account_user/Account_user";
import Lang_select from "../header/lang_select/Lang_select";
import Navigation from "../navigation/Navigation";
import Style_mobil from "../navigation/Nav_mobil.module.scss";

import S from "./Nav_alt.module.scss";

export default function Nav_alt({ children }) {
  const { closeModal } = useContext(ModalContext);

  return (
    <div className={S.wrapper}>
      <div className={S.content}>
        <header>
          {/* <Account_user /> */}
          <div
            className={S.cross_container}
            onClick={() => {
              closeModal();
            }}
          >
            <span className={S.cross}></span>
          </div>
        </header>
        <section className={S.nav_alt}>
          <Navigation css={Style_mobil}></Navigation>
        </section>
      </div>
    </div>
  );
}
