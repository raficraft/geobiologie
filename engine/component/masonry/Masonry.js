import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import useGetimage from "../../hooks/files/useGetimage";

import S from "./Masonry.module.scss";

export default function Masonry() {
  const [filesInfo, loading] = useGetimage("masonry/menhir/");

  function calculateGrid(file) {
    const ratio = file.width / file.height;

    console.log(ratio);

    if (ratio >= 2) {
      return { gridColumn: "span 4", gridRow: "span 2" };
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
      console.log("????");
      return {
        gridColumn: "span 2",
        gridRow: "span 6",
      };
    }

    if (ratio < 0.3) {
      console.log("????");
      return {
        gridColumn: "span 2",
        gridRow: "span 8",
      };
    }
  }

  function createGallery() {
    return filesInfo.map((file, idx) => {
      const calc = calculateGrid(file);
      return (
        <div key={idx} className={`${S.masonry_item}`} style={calc}>
          <Image
            src={file.src}
            blurDataURL={file.blurDataURL}
            width={file.width}
            height={file.height}
            placeholder="blur"
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
    </>
  );
}
