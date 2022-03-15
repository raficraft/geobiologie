import Image from "next/image";
import React from "react";
import portrait from "./../../public/assets/img/illustration/carte_visite/monique.jpg";

export default function Secondary() {
  return (
    <>
      <article className="article article_home">
        <header>
          <h2>Présentation Monique Sauzay</h2>
        </header>
        <div className={`embed_image embed_image--portrait`}>
          <Image
            src={portrait}
            width={portrait.width}
            height={portrait.height}
            alt="Logo en forme de pendule"
            blurDataURL={portrait.blurDataURL}
            placeholder="blur"
          />
        </div>
        <p>
          Mme Sauzay à une approche complémentaire de mon travail. Je vous la
          présente car elle même à apporter beaucoup de choses dans ma vie et
          mon travail.
        </p>
        <p>
          Mes séances se font à distance ou en présenciel, elles permettent
          d&rsquo;accéder à la libération de toutes les mémoires, inscriptions
          négatives, tensions blocages, disfonctionnements. Purification des
          centres d&rsquo;énergie, des plans subtils, de l&rsquo;aura! Se
          reconnecter terre-ciel et univers! Retrouver la paix intérieure, le
          bien Être et la santé.
        </p>
        <p>
          Les dessins sacrés de l’âme ou dessins vibratoires, agissants, nous
          permettent de prendre conscience de l&rsquo;Etre que nous sommes afin
          de mieux utiliser notre potentiel Divin . Ces dessins, qu&rsquo;ils
          soient réalisés au crayon, pastels ou peinture sont de merveilleux
          outils de transformation, de guérison et d&rsquo;évolution. Réalisés
          en état modifié de conscience et en reliance avec la Source, ils nous
          permettent de libérer nos tensions, nos peurs, nos blessures profondes
          et de lâcher prise... sur tout ce qui nous empêche d&rsquo; évoluer
          dans notre mission d&rsquo; âme.
        </p>
        <p>
          Les formes, mouvements ou couleurs possèdent des codes de Lumière et
          d&rsquo; Amour qui agissent sur notre psyché et nos corps subtils.
          Notre aura à ce moment là rayonne, s&rsquo;illumine et nous nous
          réconcilions avec notre Essence Divine. Les dessins de l&rsquo;aura
          nous révèlent nos capacités: artistiques, créatives, médiumniques
          etc... ou nos faiblesses afin de prendre conscience de ce que nous
          avons à travailler. De merveilleux outils d&rsquo;évolution et de
          réalisation de Soi.
        </p>
        <p>Monique SAUZAY</p>
      </article>
    </>
  );
}
