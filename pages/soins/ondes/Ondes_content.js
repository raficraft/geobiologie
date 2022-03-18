import React from "react";
import pdf from "./../../../public/assets/img/illustration/ondes/capture.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Ondes_content() {
  return (
    <>
      <article className="article article_home article_2col">
        <header className="article_2col--header">
          <h2>Pose de protection éléctrosensible</h2>
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

            <p>
              De nombreux films de protection solaires sont obtenus par
              apllication de divers métaux sur la surface du film. Ces métaux
              assurent la reflexion d&rsquo;énergie solaire et de lumière
              visible souhaitée pour ces produits. Ils permettent également de
              réduire ou d&rsquo;atténuer les fréquances radio ou de
              communication du spectre électromagnétique.
            </p>
          </div>

          <div className="article_2col--lastChild shadow">
            <Link href="/assets/docs/Filtration_des_ondes.pdf">
              <Image
                src={pdf}
                width={pdf.width}
                height={pdf.height}
                alt="Logo fédération française de géobiologie"
                blurDataURL={pdf.blurDataURL}
                placeholder="blur"
                className="pointer"
              />
            </Link>
            <p className="text-center">
              {" Document Pdf. Cliquer sur l'image pour consulter"}
            </p>
          </div>
        </div>
        <p className="BigInfo"></p>
      </article>
    </>
  );
}
