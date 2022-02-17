import React from "react";
import Image from "next/image";
import Link from "next/link";
import presse from "./../public/assets/docs/presse.jpg";
import portrait from "./../public/assets/img/illustration/david/david_michel.jpg";

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
        <p>Cheminement vers mon vrai chemin de vie</p>
        <p>
          La traversée d’une épreuve difficile m’a ouvert une nouvelle vision
          sur le monde qui nous entoure. J’ai dû faire face à ma sensibilité
          dans la dimension énergétique.
        </p>

        <p>
          Quand ce nouveau monde a commencé à s’ouvrir à moi, j’ai ressenti le
          mal être des personnes que je croisais, qui travaillaient autour de
          moi, les faiblesses liées à l’énergétiques. Ma clairvoyance, claire
          sentence et claire audience se sont développées à ce moment-là.
        </p>
        <p>
          Après avoir travaillé dans différentes entreprises, je me suis éloigné
          de ce système qui ne me correspond pas : courses à l’argent, rythme de
          vie effréné, égoïsme… Je me consacre aujourd’hui entièrement à
          l’ésotérisme.
        </p>
        <p>
          Mes nombreuses lectures, des formations (géobiologie, soins
          énergétiques, chamanisme sibérien, runes) et l’aide de personnes sur
          mon chemin (guérisseuse, prêtre alchimiste) m’ont permis de comprendre
          que ma place était ailleurs et que rien n’est lié au hasard.
        </p>
        <p>
          J’ai décidé de réaliser mes soins sur les personnes, harmonisations de
          lieux à distance et dégagements de toutes sortes de magies dans un
          zome énergétique. Cette structure est une forme géométrique composée
          de losanges agencés en double spirale dont la trame se veut en
          résonance avec le monde vivant.
        </p>
        <p>
          Après plusieurs années d’approfondissement dans ce domaine afin d’être
          à la hauteur de ce qui m’est permis de réaliser, je suis aujourd’hui
          pleinement inscrit dans mon chemin de vie.
        </p>
        <p>
          Faisant partie de la Fédération Française de Géobiologie, je m’inscris
          au même titre que de nombreux autres géobiologues dans la charte de la
          FFG nous engageant à exercer notre activité avec objectivité, humanité
          et probité.
        </p>
        <p>
          Mon seul but est d’accompagner les personnes venant vers moi à trouver
          des solutions à leur mal être, et leur permettre de retrouver un état
          de bien être dans leur vie.
        </p>
      </article>

      <span className="separator"></span>

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
                <Image
                  src={presse}
                  width={presse.width}
                  height={presse.height}
                  alt="Logo en forme de pendule"
                  blurDataURL={presse.blurDataURL}
                  placeholder="blur"
                />
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
                <figcaption>Recontre David Michel</figcaption>
                <audio controls src="/media/cc0-audio/t-rex-roar.mp3">
                  Your browser does not support the
                  <code>audio</code> element.
                </audio>
              </figure>
            </div>
          </div>
        </div>
      </article>

      <span className="separator"></span>

      <article className="article">
        <p>
          Vous pouvez déposer ici vos avis, commentaires et remarques sur le
          travail que j’ai effectué pour vous.
        </p>
      </article>
    </>
  );
}
