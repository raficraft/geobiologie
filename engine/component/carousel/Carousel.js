import Image from "next/image";
import React, { useState, useEffect } from "react";

import S from "./Carousel.module.scss";

export default function Carousel({ array, idx, currentFile, isVisible }) {
  console.log("render carousel");

  //Value calculate , no state !!!
  const offsetItem = isVisible * 2;
  const start = array.slice(0, offsetItem);
  const end = array.slice(offsetItem * -1);
  const itemCollection = [...end, ...array, ...start];
  const size = {
    container: itemCollection.length * 100,
    item: 100 / itemCollection.length,
  };

  const [slider, setSlider] = useState({
    transition: 0.5,
    translate: idx * size.item + offsetItem * size.item,
    currentIdx: idx + offsetItem,
  });

  function createItem() {
    return itemCollection.map((item, key) => {
      return (
        <section
          className={S.carousel_item}
          style={{ width: `${size.item}%` }}
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

  function enableTransition() {
    setSlider((S) => ({
      ...S,
      transition: 0.5,
    }));
  }
  function disableTransition() {
    setSlider((S) => ({
      ...S,
      transition: "none",
    }));
  }

  function jumpToItem(idx) {
    console.log("jump to");
    disableTransition();

    const nextTranslate = size.item * idx;
    setSlider((S) => ({
      ...S,
      translate: nextTranslate,
      currentIdx: idx,
    }));

    setTimeout(() => {
      enableTransition();
    }, 50);
  }

  function goToNext(idx) {
    console.log("goToNext");
    const nextTranslate = idx * size.item;
    const nextIndex = idx + 1;

    setSlider((S) => ({
      ...S,
      translate: nextTranslate,
      currentIdx: nextIndex,
    }));
    if (idx + 1 > array.length + offsetItem + 1) {
      jumpToItem(2);
      setTimeout(() => {
        goToNext(3);
      }, 100);
    }
  }

  console.log(slider);

  return (
    <>
      {itemCollection.length ? (
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
              goToNext(slider.currentIdx);
            }}
          >
            NEXT
          </p>
          <div className={S.carousel_marquise}>
            <div
              className={S.carousel_container}
              style={{
                width: `${size.container}%`,
                transform: `translate3d(-${slider.translate}%, 0px, 0px)`,
                transition: `${slider.transition}s`,
              }}
            >
              {createItem()}
            </div>
          </div>
        </section>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
}
