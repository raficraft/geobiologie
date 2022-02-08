import React, { useRef, useEffect } from "react";

import S from "./Heroes.module.scss";

export default function Heroes(props) {
  const { title } = { ...props };

  return (
    <header className={S.wrapper}>
      <video autoPlay muted loop>
        <source src="/assets/video/video_2.mp4" type="video/mp4" />
      </video>
      <h2 className={S.title}>David Michel</h2>
    </header>
  );
}
