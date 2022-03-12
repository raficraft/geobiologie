import Link from "next/link";
import React, { useContext, useEffect, useRef } from "react";

import { nav } from "../../../data/nav/nav";
import { useClickOutside } from "../../hooks/useClickOutside";
import { ModalContext } from "../../context/modal/ModalProvider";
import { useRouter } from "next/router";

export default function Navigation({ css }) {
  const S = css;

  const router = useRouter();
  function getCurrentPath() {
    const path = router.pathname.split("/");
    return path[1];
  }

  function createNav() {
    return nav.map((root, key) => {
      return (
        <NestedNav
          root={root}
          key={key}
          css={css}
          currentPath={getCurrentPath()}
        ></NestedNav>
      );
    });
  }

  return (
    <>
      <nav className={S.nav}>
        <ul className={S.navList}>{createNav()}</ul>
      </nav>
    </>
  );
}

function NestedNav({ root, css, currentPath }) {
  const [isOpen, setIsOpen, nestedRef] = useClickOutside(false);
  const { modal, setModal, closeModal, openModal } = useContext(ModalContext);

  const linkRef = useRef();

  const S = css;

  const router = useRouter();

  function openNested(e, toggle) {
    e.preventDefault(e);
    setIsOpen(toggle);
  }

  function lol(e) {
    console.log("lol");
    console.log(router);

    const allLink = document.querySelectorAll('[data-selector="link"]');

    if (e) {
      //console.log(allLink);

      for (const link of allLink) {
        link.dataset.currentpath = false;
      }
      if (e.target === linkRef.current) {
        linkRef.current.dataset.currentpath = true;
      }
    }
  }

  function defineCurrentOnLoad() {
    console.log("second render on Nav on Load", "/" + currentPath);

    const allLink = document.querySelectorAll('[data-selector="link"]');

    //console.log(allLink);

    for (const link of allLink) {
      link.dataset.currentPath = false;

      if (link.dataset.path === "/" + currentPath) {
        link.dataset.currentpath = true;
      }
    }
  }

  //console.log("root", root);

  useEffect(() => {
    defineCurrentOnLoad();
  }, []);

  return (
    <Link href={root.link}>
      <li className={S.navList_item}>
        <a
          ref={linkRef}
          className={`${S.navList_link}`}
          onClick={
            root.child
              ? (e) => {
                  openNested(e, true);
                  lol(e);
                }
              : (e) => {
                  closeModal("nav_alt");
                  lol(e, root.link);
                }
          }
          data-path={root.link}
          data-selector="link"
          data-currentpath="false"
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
                    <a
                      className={S.navList_nested_link}
                      onClick={(e) => {
                        closeModal("nav_alt");
                      }}
                      data-isopen={isOpen}
                    >
                      {nestedLink.title}
                    </a>
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
