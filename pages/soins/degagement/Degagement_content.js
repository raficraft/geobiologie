import React from "react";

import Image from "next/image";
import embed from "../../../public/assets/img/masonry/soins/degagement/degagement.jpg";

export default function Presentation_content() {
  return (
    <>
      <article className="article article_home">
        <header>
          <h2>Soin de dégagement</h2>
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
          L&rsquo;objectif du soin de dégagement est de débarasser la personne
          de toutes entités négatives, magies noires , envoûtements, anathèmes,
          malédictions, sort, exorcisme.
        </p>

        <p>
          Un tel soin peut être proposé dans les situations suivantes : si vous
          sentez fatigué, irritable, nous n&rsquo;êtes plus vous mêmes, ou si
          vous vivez des situations complexes/négatives à répétition.
        </p>
      </article>
    </>
  );
}
