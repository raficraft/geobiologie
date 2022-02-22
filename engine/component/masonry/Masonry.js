import Image from "next/image";
import React, { useState, useContext } from "react";
import { ModalContext } from "../../context/modal/ModalProvider";
import useGetimage from "../../hooks/files/useGetimage";
import Carousel from "../carousel/Carousel";
import Modal_body from "../modal/Modal_body";

import S from "./Masonry.module.scss";

export default function Masonry({ dir }) {
  const [filesInfo, loading] = useGetimage(dir);
  const { modal, openModal } = useContext(ModalContext);
  const [currentFile, setCurrentFile] = useState({
    current: {},
    idx: 0,
  });

  function calculateGrid(file) {
    const ratio = file.width / file.height;

    if (ratio >= 2) {
      return { gridColumn: "span 4", gridRow: "span 3" };
    }

    if (ratio >= 1) {
      return { gridColumn: "span 2", gridRow: "span 2" };
    }

    if (ratio >= 0.6 && ratio < 1) {
      return {
        gridColumn: "span 2",
        gridRow: "span 4",
      };
    }
    if (ratio > 0.3 && ratio < 0.6) {
      return {
        gridColumn: "span 2",
        gridRow: "span 5",
      };
    }

    if (ratio < 0.3) {
      return {
        gridColumn: "span 2",
        gridRow: "span 8",
      };
    }
  }

  function handleClick(file, idx) {
    setCurrentFile((s) => ({ ...s, current: file, idx: idx }));
    openModal("embed");
  }

  function createGallery() {
    return filesInfo.map((file, idx) => {
      const calc = calculateGrid(file);
      return (
        <div key={idx} className={`${S.masonry_item}`} style={calc}>
          <Image
            src={file.src}
            width={file.width}
            height={file.height}
            blurDataURL={file.blurDataURL}
            placeholder="blur"
            onClick={() => {
              handleClick(file, idx);
            }}
            alt=""
          ></Image>
        </div>
      );
    });
  }

  return (
    <>
      {!loading ? (
        <section className={S.masonry}>{createGallery()}</section>
      ) : (
        <p>Loading</p>
      )}

      {modal.embed && filesInfo.length && (
        <Modal_body addContainer={false}>
          <Carousel
            currentFile={currentFile.current}
            idx={currentFile.idx}
            array={filesInfo}
            isVisible={1}
          ></Carousel>
        </Modal_body>
      )}
    </>
  );
}
