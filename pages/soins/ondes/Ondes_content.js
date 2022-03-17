import React from "react";
import pdf from "./../../../public/assets/img/illustration/ondes/capture.jpg";
import Image from "next/image";

export default function Ondes_content() {
  return (
    <>
      <article className="article article_home article_2col">
        <header className="article_2col--header">
          <h2>Protection éléctrosensible</h2>
        </header>
        <div className="article_2col--content">
          <div className="article_2col--firstChild">
            <p>
              L&rsquo;énergie électrique et magnétique émise par de nombreux
              appareils electroniques peut perturber les fonctions
              d&rsquo;autres appareils électroniques. La majorité des problèmes
              d&rsquo;interférences electromagnétques (EMI) a pour origine la
              bande des radiofréquences (RF) comprise entre 30 kHz et 10 GHz. Le
              blindage contre les EMI et/ou les RF est généralement nécessaire
              pour les raisons suivantes.
            </p>
            <ul>
              <li>
                Pour exclure les signaux électromagnétiques ou RF indésirables.
              </li>
              <li>Pour bloquer les signaux EM ou RF indésirables.</li>
              <li>
                Pour empêcher l&rsquo;interception non autorisée de signaux
                micro-ondes et radio
              </li>
            </ul>
          </div>

          <div className="article_2col--lastChild">
            <Image
              src={pdf}
              width={pdf.width}
              height={pdf.height}
              alt="Logo fédération française de géobiologie"
              blurDataURL={pdf.blurDataURL}
              placeholder="blur"
            />
          </div>
        </div>
        <p className="BigInfo"></p>
      </article>
    </>
  );
}
