import Image from "next/image";
import React, { useState, useEffect } from "react";

import S from "./Carousel.module.scss";

export default function Carousel({ array, idx, currentFile, isVisible }) {
  console.log("yolo", array);
  console.log("yolo", array.length);
  const [containerSize, setContainerSize] = useState("");
  const [itemSize, setItemSize] = useState("");
  const [currentTranslate, setCurrentTranslate] = useState("");
  const [itemsCollection, setItemsCollection] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(idx);
  const [transition, setTranstition] = useState(0.5);

  const offsetItem = isVisible * 2;

  function makeNewArray() {
    const start = array.slice(0, offsetItem);
    const end = array.slice(offsetItem * -1);

    const listItem = [...start, ...array, ...end];

    const containerWidth = listItem.length * 100;
    const itemWidth = 100 / listItem.length;

    const currentTranslate = idx * itemWidth + offsetItem * itemWidth;

    setContainerSize(containerWidth);
    setItemSize(itemWidth);
    setCurrentTranslate(currentTranslate);
    setItemsCollection(listItem);
  }

  function createItem() {
    return itemsCollection.map((item, key) => {
      return (
        <section
          className={S.carousel_item}
          style={{ width: `${itemSize}%` }}
          key={key}
        >
          <Image
            layout="fill"
            objectFit="contain"
            className={S.flex}
            src={item.src}
            blurDataURL={item.blurDataURL}
            placeholder="blur"
          ></Image>
        </section>
      );
    });
  }

  function goToNext() {
    console.log("idx next", currentIdx);
    console.log("add next", currentIdx + 1);
    if (currentIdx + 1 < array.length) {
      setCurrentTranslate(currentTranslate + itemSize);
      setCurrentIdx(currentIdx + 1);
    } else {
      console.log("jump to start");
      setTranstition(0);
      setCurrentTranslate(0);
      setCurrentIdx(0);
      setTranstition(0.5);
    }
  }
  function goToPrev() {
    console.log("idx prev", currentIdx);
    if (currentIdx < 0) {
      setCurrentTranslate(currentTranslate - itemSize);
      setCurrentIdx(currentIdx - 1);
    } else {
      setCurrentTranslate(itemSize * array.length);
      setCurrentIdx(array.length);
    }
  }

  useEffect(() => {
    makeNewArray();
  }, []);

  return (
    <>
      {itemsCollection.length ? (
        <section className={S.carousel}>
          <p
            onClick={() => {
              goToPrev();
            }}
          >
            PREV
          </p>
          <p
            onClick={() => {
              goToNext();
            }}
          >
            NEXT
          </p>
          <div className={S.carousel_marquise}>
            <div
              className={S.carousel_container}
              style={{
                width: `${containerSize}%`,
                transform: `translate3d(-${currentTranslate}%, 0px, 0px)`,
                transition: `${transition}s`,
              }}
            >
              {createItem()}
            </div>
          </div>
        </section>
      ) : (
        <h1>...Loading</h1>
      )}
    </>
  );
}
