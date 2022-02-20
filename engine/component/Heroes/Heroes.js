import React from "react";

import S from "./Heroes.module.scss";

export default function Heroes({ src, video, children }) {
  return (
    <>
      {video === "drawing" ? (
        <header className={`${S.wrapper}`}>
          <div className={S.content}>
            <video autoPlay muted loop>
              <source src={src} type="video/mp4" />
              Sorry, your browser doesn't support embedded videos.
            </video>
            {children}
          </div>
        </header>
      ) : (
        <header className={`${S.videoPlayer}`}>
          <div className={S.content}>
            <video controls>
              <source src={src} type="video/mp4" />
              Sorry, your browser doesn't support embedded videos.
            </video>
          </div>
        </header>
      )}
    </>
  );
}
