import React, { useRef, useEffect } from "react";

import S from "./Heroes.module.scss";

export default function Heroes({ src, video, children }) {
  function test() {
    console.log("yolo");
  }

  return (
    <>
      {video === "drawing" ? (
        <header className={`${S.wrapper}`}>
          <video autoPlay muted loop>
            <source src={src} type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
          </video>
          {children}
        </header>
      ) : (
        <header className={`${S.videoPlayer}`}>
          <video controls>
            <source src={src} type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
          </video>
        </header>
      )}
    </>
  );
}
