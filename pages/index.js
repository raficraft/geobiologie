import React from "react";
import Head from "next/head";
import List_review from "../engine/component/form/user_review/list_review/List_review";
import User_review from "../engine/component/form/user_review/User_review";
import Heroes from "../engine/component/Heroes/Heroes";
import Image from "next/image";

import logo from "./../public/assets/svg/1.5x/logo.png";

export default function Home() {
  /*** */

  return (
    <>
      <Head>
        <title>David Michel. Géobiologie Loire 42</title>
        <meta name="description" content="My heart in my Art" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mainContent">
        <Heroes src="/assets/video/video_7.mp4" video="drawing">
          <div className="inside">
            <div className="inside_content">
              <Image
                src={logo}
                width={logo.width}
                height={logo.height}
                className="logo"
                onClick={(e) => test(e)}
              />

              <div className="heroes_title">
                <h2 className="title">David Michel</h2>
                <h3 className="subtitle">Geobiologue</h3>
              </div>
            </div>
          </div>
        </Heroes>
        <section className="content">
          <article className="article">
            <h1>A quoi sert la Géobiologie ?</h1>
            <p>
              La géobiologie étudie les impacts de l’environnement sur la santé
              des vivants, c’est-à-dire non seulement des humains, mais aussi
              des animaux et des végétaux. Le but de cette pratique est de
              mettre en évidence les perturbations que les cours d’eau, les
              cavités vides, les zones de failles, les cheminées
              cosmo-telluriques, les réseaux Hartmann et Curry et autres
              phénomènes géologiques présentent à proximité de l’habitation
              peuvent provoquer.
            </p>
            <hr></hr>
            <h2>Pourquoi une expertise Géobiologique ?</h2>
            <p>
              L’exposition à long terme aux diverses nuisances présentes dans
              l’environnement peut entraîner des maladies chroniques, des
              allergies, des troubles du sommeil ou même une dépression. Une
              expertise géobiologique permet de déterminer quels sont réellement
              les phénomènes qui nuisent au bien-être d’une habitation pour
              ensuite trouver des corrections adéquates. Grâce à ses facultés
              techniques et sensorielles, le spécialiste en géobiologie est en
              mesure de neutraliser les effets des phénomènes et ondes nocives.
              Une expertise géobiologique contribue ainsi à la résolution des
              problèmes physiologiques que les occupants d’une maison peuvent
              avoir. Avant d’entamer des travaux de construction et de
              rénovation, demander une expertise en géobiologie permet de
              connaitre l’emplacement idéal pour les pièces et les modifications
              à apporter à l’habitation pour que la qualité de vie et le tonus
              des personnes qui y vivent soient améliorés.
            </p>
            <hr></hr>
          </article>

          <article className="article">
            <p>
              Vous pouvez déposer ici vos avis, commentaires et remarques sur le
              travail que j’ai effectué pour vous.
            </p>
          </article>

          <List_review></List_review>
          <User_review></User_review>
        </section>
      </main>
    </>
  );
}
