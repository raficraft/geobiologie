import React from "react";
import Image from "next/image";
import Link from "next/link";
import presse from "./../public/assets/docs/presse.jpg";
import portrait from "./../public/assets/img/illustration/david/david_michel.jpg";
import HR from "../engine/component/atomic/HR";

export default function Index_content() {
  return (
    <>
      <article className="article article_home">
        <header>
          <h2>Présentation David MICHEL</h2>
        </header>
        <div className="portrait">
          <Image
            src={portrait}
            width={portrait.width}
            height={portrait.height}
            alt="Logo en forme de pendule"
            blurDataURL={portrait.blurDataURL}
            placeholder="blur"
          />
        </div>
      </article>

      <article className="article article_home">
        <h2>Revue de presse</h2>
        {/* VIDEO AND presse */}
        <div className="media_home">
          {/* video */}

          <div className="media_home-video">
            <h3>Interview France 3</h3>
            <div className="media_home-video--container">
              <video controls width="100%">
                <source src="/assets/video/video_0.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* presse */}

          <div className="media_home-presse">
            <h3>Article de presse</h3>
            <div className="media_home-presse--img">
              <Link href="/">
                <a>
                  <Image
                    src={presse}
                    width={presse.width}
                    height={presse.height}
                    alt="Logo en forme de pendule"
                    blurDataURL={presse.blurDataURL}
                    placeholder="blur"
                  />
                </a>
              </Link>
            </div>
            <p className="text-center">
              Document Pdf. Cliquer sur l'image pour consulter
            </p>
          </div>

          {/* Interview Radio  */}

          <div className="media_home-radio">
            <h3>Interview Radio</h3>
            <div className="media_home-radio--player">
              <figure>
                <figcaption>Reportage David Michel</figcaption>
                <audio controls src="/media/cc0-audio/t-rex-roar.mp3">
                  Your browser does not support the
                  <code>audio</code> element.
                </audio>
              </figure>
              <figure>
                <figcaption>Recontre avec David Michel</figcaption>
                <audio controls src="/media/cc0-audio/t-rex-roar.mp3">
                  Your browser does not support the
                  <code>audio</code> element.
                </audio>
              </figure>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
