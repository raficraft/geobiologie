import Image from "next/image";
import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  useLayoutEffect,
} from "react";
import { ModalContext } from "../../context/modal/ModalProvider";

import S from "./Carousel.module.scss";

export default function Carousel({ array, idx, currentFile, isVisible }) {
  const { modal, openModal, closeModal } = useContext(ModalContext);

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

  const [onTouch, setOnTouch] = useState({
    start: false,
    move: false,
    end: false,
    start_X: 0,
    start_Y: 0,
    translate_X: 0,
    translate_Y: 0,
    baseTranslate: 0,
  });

  /**
   * Démarre le déplacement
   * @param {MouseEvent | ToucheEvent} e
   */

  function handleSlideStart(e) {
    e.preventDefault();
    console.log("start", e);

    // If there are two fingers on the screen, nothing is done.
    if (e.touches) {
      if (e.touches.length > 1) {
        return;
      } else {
        e = e.touches[0];
      }
    }

    console.log("on touch start", e);

    setOnTouch((S) => ({
      ...S,
      start: true,
      start_X: e.screenX,
      start_Y: e.screenY,
    }));
    disableTransition();
  }
  function handleSlideMove(e) {
    if (onTouch.start === true) {
      // console.log("move", e);
      // console.log("move on touch state", onTouch);
      // console.log("move on touch event", e.touches[0]);

      let touch = e.touches ? e.touches[0] : e;
      let drag = {
        X: touch.screenX - onTouch.start_X,
        Y: touch.screenY - onTouch.start_Y,
      };
      console.log(drag);

      let baseStart = (slider.currentIdx * -100) / itemCollection.length;

      console.log(baseStart + (100 * drag.X) / size.container);
      setSlider((S) => ({
        ...S,
        translate: baseStart + (100 * drag.X) / size.container,
      }));
    }
  }
  function handleSlideEnd(e) {
    if (onTouch.start) {
      console.log("THIS IS THE END");
      console.log("THIS IS THE END");
      console.log("THIS IS THE END");
      console.log("THIS IS THE END");
      console.log("THIS IS THE END");
      console.log("THIS IS THE END");
      console.log("THIS IS THE END");
      console.log("THIS IS THE END");
      setOnTouch((S) => ({
        ...S,
        start: false,
      }));
      enableTransition();
    }
  }

  function createItem() {
    return itemCollection.map((item, key) => {
      return (
        <section
          className={S.carousel_item}
          style={{ width: `${size.item}%` }}
          key={key}
          onTouchStart={(e) => {
            handleSlideStart(e);
          }}
          onTouchMove={(e) => {
            handleSlideMove(e);
          }}
          onTouchEnd={(e) => {
            handleSlideEnd(e);
          }}
          onMouseDown={(e) => {
            handleSlideStart(e);
          }}
          onMouseMove={(e) => {
            handleSlideMove(e);
          }}
          onMouseUp={(e) => {
            handleSlideEnd(e);
          }}
        >
          <Image
            layout="fill"
            objectFit="contain"
            className={S.flex}
            src={item.src}
            blurDataURL={item.blurDataURL}
            placeholder="blur"
            alt=""
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
    }, 10);
  }

  function goToNext(idx = slider.currentIdx) {
    console.log("goToNext", idx);
    const nextIndex = idx + 1;
    const nextTranslate = nextIndex * size.item;

    setSlider((S) => ({
      ...S,
      translate: nextTranslate,
      currentIdx: nextIndex,
    }));
    if (nextIndex > array.length + isVisible) {
      jumpToItem(1);
      setTimeout(() => {
        goToNext(1);
      }, 20);
    }
  }

  function goToPrev(idx = slider.currentIdx) {
    console.log("goToNext", idx);
    const prevIndex = idx - 1;
    const prevTranslate = prevIndex * size.item;

    setSlider((S) => ({
      ...S,
      translate: prevTranslate,
      currentIdx: prevIndex,
    }));
    if (prevIndex < offsetItem) {
      jumpToItem(array.length + offsetItem);
      setTimeout(() => {
        goToPrev(array.length + offsetItem);
      }, 20);
    }
  }

  //   function handleKeyUp(e) {
  //     console.log(e.key);
  //   }

  //   useGlobalDomEvent({
  //     keydown(e) {
  //       if (e.key === "Escape") {
  //         closeModal();
  //       }
  //       if (e.key === "ArrowRight") {
  //         goToNext(slider.currentIdx);
  //       }
  //       if (e.key === "ArrowLeft") {
  //         goToPrev(slider.currentIdx);
  //         setSlider((S) => ({
  //           ...S,
  //           currentIdx: slider.currentIdx + 1,
  //         }));
  //       }
  //     },
  //   });

  //   //   useKey("ArrowRight", goToNext(slider.currentIdx));

  //   console.log(slider);

  function handleKeyDown(e) {
    console.log(e);

    if (e.key === "Escape") {
      closeModal();
    }
    if (e.key === "ArrowRight") {
      goToNext(slider.currentIdx);
    }
    if (e.key === "ArrowLeft") {
      goToPrev(slider.currentIdx);
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [slider]);

  return (
    <>
      {itemCollection.length ? (
        <section className={S.carousel}>
          <div
            className={S.closeParent}
            onClick={() => {
              closeModal();
            }}
          >
            <span></span>
          </div>
          <span
            className={S.carousel_prev}
            onClick={() => {
              goToPrev(slider.currentIdx);
            }}
          ></span>

          <span
            className={S.carousel_next}
            onClick={() => {
              goToNext(slider.currentIdx);
            }}
          ></span>
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
