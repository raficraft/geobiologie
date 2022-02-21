import React, { useEffect, useState } from "react";

import S from "./Heroes.module.scss";

import item from "./../../../public/assets/img/illustration/heroes/heroes (13).jpg";
import Image from "next/image";

export default function Heroes({ src, video, children }) {
  const [image, setImage] = useState(false);
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  useEffect(() => {
    async function getRandomImage() {
      const random = getRandomInt(36);

      console.log(random);

      try {
        const i = await import(
          `/public/assets/img/illustration/heroes/heroes (${random}).jpg`
        );
        console.log("yolo ", i);
        setImage(i.default);
      } catch (error) {}
    }

    getRandomImage();

    setInterval(() => {
      getRandomImage();
    }, 5000);
  }, []);
  return (
    <header className={`${S.wrapper}`}>
      <div className={S.content}>
        {image && (
          <Image
            layout="fill"
            objectFit="cover"
            className={S.flex}
            src={image.src}
            blurDataURL={item.blurDataURL}
            placeholder="blur"
            alt=""
          ></Image>
        )}

        {children}
      </div>
    </header>
  );
}
