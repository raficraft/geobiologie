import Link from "next/link";
import React, { useState } from "react";
import useMediaQuery from "../../hooks/useMediaQueries";
import S from "./Nav_top.module.scss";

import { nav } from "../../../data/nav/nav";
import { useClickOutside } from "../../hooks/useClickOutside";

export default function Nav_top() {
  const isMedium = useMediaQuery("(min-width: 578px) and (max-width :767px)");
  const isTablet = useMediaQuery("(min-width: 768px)");

  function createNav() {
    return nav.map((root, key) => {
      return <NestedNav root={root} key={key}></NestedNav>;
    });
  }

  return (
    <>
      {(isTablet || isMedium) && (
        <nav className={S.nav_top}>
          <ul className={S.navList}>{createNav()}</ul>
        </nav>
      )}
    </>
  );
}

export function NestedNav({ root }) {
  const [isOpen, setIsOpen, nestedRef] = useClickOutside(false);

  function openNested(e, toggle) {
    e.preventDefault(e);

    setIsOpen(toggle);
  }

  return (
    <Link href={root.link}>
      <li className={S.navList_item}>
        <a
          className={S.navList_link}
          onClick={
            root.child
              ? (e) => {
                  openNested(e, true);
                }
              : null
          }
        >
          {root.icon}
          {root.title}
        </a>
        {root.child && isOpen && (
          <ul ref={nestedRef} className={S.navList_nested}>
            {root.child.map((nestedLink, nestedKey) => {
              return (
                <Link href={nestedLink.link} key={nestedKey}>
                  <li className={S.navList_nested_item}>
                    <a className={S.navList_nested_link}>{nestedLink.title}</a>
                  </li>
                </Link>
              );
            })}
          </ul>
        )}
      </li>
    </Link>
  );
}