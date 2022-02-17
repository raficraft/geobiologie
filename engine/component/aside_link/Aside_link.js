import Link from "next/link";
import React, { useContext } from "react";

import S from "./Aside_link.module.scss";
import { ModalContext } from "../../context/modal/ModalProvider";

export default function Aside_link() {
  const { openModal, closeModal } = useContext(ModalContext);

  return (
    <aside className={S.aside_link}>
      <span>A</span>
      <span>B</span>
      <span>C</span>
      <span>
        <Link href="/admin">
          <a>E</a>
        </Link>
      </span>
      <span
        onClick={() => {
          openModal;
        }}
      >
        F
      </span>
    </aside>
  );
}
