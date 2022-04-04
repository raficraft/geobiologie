import React from "react";
import Image from "next/image";

import embed from "../../../public/assets/img/masonry/soins/energie/energie.jpg";

export default function Energie_content() {
  return (
    <>
      <article className="article article_home">
        <header>
          <h2>Soins énergétiques</h2>
        </header>

        <div className={`embed_image embed_image--portrait`}>
          <Image
            src={embed}
            width={embed.width}
            height={embed.height}
            alt="Logo en forme de pendule"
            blurDataURL={embed.blurDataURL}
            placeholder="blur"
          />
        </div>
        <p>
          Je réalise des soins énergétiques (à distance sur une photographie de
          la personne ou sur place au sein de mon zome énergétiques)
        </p>

        <p>Ce soin permet :</p>

        <ul>
          <li>
            D&rsquo;élever votre taux énergétique en cas de fatigue, période de
            stress, ou si vous avez été sujet à des énergies négatives (entités,
            mauvais oeil, magie noire...)
          </li>

          <li>
            D&rsquo;harmoniser le flux énergétique du corps et de l&rsquo;esprit
          </li>

          <li>De purifier tous les corps subtils</li>
          <li>De débloquer et rééquilibrer les chakras</li>
        </ul>

        <p>Elevez votre taux énergétique sur vos défenses immunitaires. </p>
      </article>
    </>
  );
}
