import React, { useRef, useEffect } from "react";

import S from "./Heroes.module.scss";

export default function Heroes(props) {
  const { title } = { ...props };

  const videoRef = useRef();

  useEffect(() => {
    console.log(videoRef);
    videoRef.current.play();
  }, []);
  return (
    <header className={S.wrapper}>
      <video autoplay muted loop ref={videoRef}>
        <source src="/assets/video/video_3.mp4" type="video/mp4" />
      </video>
      <h2 class={S.title}>David Michel</h2>
    </header>
  );
}
