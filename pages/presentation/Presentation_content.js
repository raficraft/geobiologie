import Image from "next/image";
import React from "react";
import HR from "../../engine/component/atomic/HR";
import portrait from "./../../public/assets/img/illustration/david/david_michel.jpg";

export default function Presentation_content() {
  return (
    <>
      <article className="article article_home">
        <header>
          <h2>Présentation David MICHEL</h2>
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
        <p>Cheminement vers mon vrai chemin de vie</p>
        <p>
          La traversée d&rsquo;une épreuve difficile m&rsquo;a ouvert une
          nouvelle vision sur le monde qui nous entoure. J&rsquo;ai dû faire
          face à ma sensibilité dans la dimension énergétique.
        </p>

        <p>
          Quand ce nouveau monde a commencé à s&rsquo;ouvrir à moi, j&rsquo;ai
          ressenti le mal être des personnes que je croisais, qui travaillaient
          autour de moi, les faiblesses liées à l&rsquo;énergétiques. Ma
          clairvoyance, claire sentence et claire audience se sont développées à
          ce moment-là.
        </p>
        <p>
          Après avoir travaillé dans différentes entreprises, je me suis éloigné
          de ce système qui ne me correspond pas : courses à l&rsquo;argent,
          rythme de vie effréné, égoïsme... Je me consacre aujourd&rsquo;hui
          entièrement à l&rsquo;ésotérisme.
        </p>
        <p>
          Mes nombreuses lectures, des formations (géobiologie, soins
          énergétiques, chamanisme sibérien, runes) et l&rsquo;aide de personnes
          sur mon chemin (guérisseuse, prêtre alchimiste) m&rsquo;ont permis de
          comprendre que ma place était ailleurs et que rien n&rsquo;est lié au
          hasard.
        </p>
        <p>
          J&rsquo;ai décidé de réaliser mes soins sur les personnes,
          harmonisations de lieux à distance et dégagements de toutes sortes de
          magies dans un zome énergétique. Cette structure est une forme
          géométrique composée de losanges agencés en double spirale dont la
          trame se veut en résonance avec le monde vivant.
        </p>
        <p>
          Après plusieurs années d&rsquo;approfondissement dans ce domaine afin
          d&rsquo;être à la hauteur de ce qui m&rsquo;est permis de réaliser, je
          suis aujourd&rsquo;hui pleinement inscrit dans mon chemin de vie.
        </p>
        <p>
          Faisant partie de la Fédération Française de Géobiologie, je
          m&rsquo;inscris au même titre que de nombreux autres géobiologues dans
          la charte de la FFG nous engageant à exercer notre activité avec
          objectivité, humanité et probité.
        </p>
        <p>
          Mon seul but est d&rsquo;accompagner les personnes venant vers moi à
          trouver des solutions à leur mal être, et leur permettre de retrouver
          un état de bien être dans leur vie.
        </p>
      </article>
    </>
  );
}
