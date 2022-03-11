import Link from "next/link";
import React, { useState } from "react";
import useMediaQuery from "../../hooks/useMediaQueries";
import S from "./Nav_top.module.scss";

import { nav } from "../../../data/nav/nav";
import { useClickOutside } from "../../hooks/useClickOutside";

export default function Nav_top() {
  const isMobil = useMediaQuery("(max-width: 767px)");
  const isMedium = useMediaQuery("(min-width: 578px) and (max-width :767px)");
  const isTablet = useMediaQuery("(min-width: 768px)");
  const isDesktop = useMediaQuery("(min-width: 1100px)");

  const [isOpen, setIsOpen, nestedRef] = useClickOutside(false);

  function openNested(e, toggle) {
    e.preventDefault(e);
    setIsOpen(toggle);
  }

  function createNav() {
    return nav.map((root, key) => {
      return <NestedNav root={root} key={key}></NestedNav>;
    });
  }

  return (
    <>
      {(isTablet || isMedium) && (
        <nav
          className={S.nav_top}
          onMouseLeave={(e) => {
            openNested(e, false);
          }}
        >
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
          onMouseEnter={
            root.child
              ? (e) => {
                  openNested(e, true);
                }
              : null
          }
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
