import Image from "next/image";
import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  useLayoutEffect,
} from "react";
import { ArrowLeft, ArrowRight } from "../../../assets/icons/Icon_svg";
import { ModalContext } from "../../context/modal/ModalProvider";
import useTouchEvent from "../../hooks/useTouchEvent";

import S from "./Carousel.module.scss";

export default function Carousel({ array, idx, currentFile, isVisible }) {
  const refCarousel = useRef(null);
  const { onTouch } = useTouchEvent(refCarousel);
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

  /**
   * Démarre le déplacement
   * @param {MouseEvent | TouchEvent} e
   */

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
  }, []);

  useEffect(() => {
    //console.log("!!!!!!!!!!!!!!! in use effect", onTouch);

    if (
      onTouch.direction_X === "left" &&
      onTouch.percent_X > 20 &&
      onTouch.start === false
    ) {
      goToNext();
    } else if (
      onTouch.direction_X === "right" &&
      onTouch.percent_X > 20 &&
      onTouch.start === false
    ) {
      goToPrev();
    }
  }, [onTouch.start]);

  return (
    <>
      {itemCollection.length ? (
        <section className={S.carousel} ref={refCarousel}>
          <div
            className={S.closeParent}
            onClick={() => {
              closeModal();
            }}
            data-touch={false}
          >
            <span></span>
          </div>
          <span
            className={S.carousel_prev}
            onClick={() => {
              goToPrev(slider.currentIdx);
            }}
            data-touch={false}
          ></span>

          <span
            className={S.carousel_next}
            onClick={() => {
              goToNext(slider.currentIdx);
            }}
            data-touch={false}
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
          <footer>
            <div className={S.paginate}>
              <ArrowLeft
                className={S.paginate_button}
                onClick={() => {
                  goToPrev(slider.currentIdx);
                }}
              ></ArrowLeft>

              <div className={S.number}>
                <p>{slider.currentIdx - offsetItem + 1}</p>
                <p>&#10240;/&#10240; </p>
                <p>{array.length}</p>
              </div>

              <ArrowRight
                className={S.paginate_button}
                onClick={() => {
                  goToNext(slider.currentIdx);
                }}
              ></ArrowRight>
            </div>
          </footer>
        </section>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
}
