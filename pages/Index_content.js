import React from "react";
import Image from "next/image";
import Link from "next/link";
import presse from "./../public/assets/docs/presse.jpg";
import radio from "./../public/assets/img/illustration/david/radio.jpg";
import HR from "../engine/component/atomic/HR";
import FFG from "./../public/assets/img/illustration/FFG/FFG.png";
import Masonry from "./../engine/component/masonry/Masonry";
import Image_WITH_Lightbox from "../engine/component/Image_WITH_Lightbox/Image_WITH_Lightbox";

import carte_low from "./../public/assets/img/illustration/carte_visite/carte_visite.jpg";
import carte_middle from "./../public/assets/img/illustration/carte_visite/carte_visite.jpg";

export default function IndexContent() {
  return (
    <>
      <article className="article article_home">
        <section className="what">
          <Image_WITH_Lightbox
            src={carte_low}
            lightbox={true}
            src_ligthbox={carte_middle}
          ></Image_WITH_Lightbox>
        </section>
        <header>
          <h1>À Quoi Sert donc la Géobiologie ?</h1>
        </header>

        <section>
          <h2>
            Découvrez l&apos;importance de la géobiologie avec David Michel
          </h2>
          <h3>En savoir plus</h3>
          <p>
            La géobiologie est une discipline qui étudie les impacts de
            l&apos;environnement sur la santé des êtres vivants, qu&apos;il
            s&apos;agisse des humains, des animaux ou des végétaux. Cette
            pratique vise à identifier et à corriger les perturbations
            géopathogènes telles que les cours d&apos;eau souterrains, les
            cavités vides, les zones de failles, les cheminées
            cosmo-telluriques, et les réseaux Hartmann et Curry. Ces phénomènes
            géologiques peuvent avoir des effets négatifs sur le bien-être des
            occupants d&apos;une habitation.
          </p>

          <h3>Pourquoi une Expertise Géobiologique est-elle Essentielle ?</h3>
          <ul>
            <li>
              <h4>Prévenir les Problèmes de Santé</h4>
              <p>
                L&apos;exposition prolongée aux diverses nuisances
                environnementales peut entraîner des maladies chroniques, des
                allergies, des troubles du sommeil, et même des états
                dépressifs. Une expertise géobiologique permet d&apos;identifier
                les facteurs exacts qui nuisent à la qualité de vie dans une
                maison et de trouver des solutions adéquates.
              </p>
            </li>
            <li>
              <h4>Optimiser le Bien-Être et le Confort</h4>
              <p>
                Grâce à ses compétences techniques et sensorielles, le
                spécialiste en géobiologie est capable de neutraliser les effets
                des ondes nocives et des perturbations géologiques. Cette
                intervention contribue à améliorer la santé et le bien-être des
                occupants, en résolvant des problèmes physiologiques
                potentiellement liés à l&apos;environnement de la maison.
              </p>
            </li>
            <li>
              <h4>Prévenir les Pollutions Électromagnétiques</h4>
              <p>
                La géobiologie inclut également l&apos;étude des positions des
                antennes relais et des pylônes haute tension pour déterminer
                s&apos;ils provoquent une pollution électrique et
                électromagnétique dans l&apos;habitation. En identifiant ces
                sources de pollution, des mesures peuvent être prises pour
                protéger les occupants.
              </p>
            </li>
          </ul>

          <h3>Comment une Expertise Géobiologique est-elle Réalisée ?</h3>
          <ul>
            <li>
              <h4>Analyse Initiale</h4>
              <p>
                Une expertise géobiologique commence par une analyse détaillée
                de l&apos;environnement. Le spécialiste utilise ses capacités
                sensorielles et des outils spécifiques comme les baguettes
                radmaster et l&apos;antenne de Lécher pour détecter et mesurer
                les perturbations géopathogènes.
              </p>
            </li>
            <li>
              <h4>Étude de l&apos;Histoire des Lieux</h4>
              <p>
                Les spécialistes prennent en compte l&apos;histoire des lieux
                pour identifier d&apos;éventuelles mémoires énergétiques liées à
                des événements passés tels que des famines, des maladies, des
                violences ou des guerres. Ces mémoires peuvent imprégner les
                murs et les sols, causant un mal-être chez les occupants.
              </p>
            </li>
            <li>
              <h4>Identification des Perturbations</h4>
              <p>
                Le spécialiste identifie les cours d&apos;eau souterrains, les
                failles géologiques, les cheminées cosmo-telluriques, et les
                réseaux Hartmann et Curry. Il évalue également l&apos;impact des
                structures modernes comme les antennes relais et les pylônes
                haute tension.
              </p>
            </li>
            <li>
              <h4>Propositions de Solutions</h4>
              <p>
                Après avoir identifié les perturbations, des solutions sont
                proposées pour harmoniser l&apos;espace de vie. Cela peut
                inclure le réagencement des meubles, la pose de dispositifs de
                neutralisation des ondes, et des conseils sur l&apos;emplacement
                idéal des pièces lors de travaux de construction ou de
                rénovation.
              </p>
            </li>
          </ul>

          <h3>Les Bénéfices Concrets d&apos;une Expertise Géobiologique</h3>
          <ul>
            <li>
              <h4>Amélioration de la Santé</h4>
              <p>
                En éliminant les nuisances géopathogènes, les occupants peuvent
                constater une amélioration significative de leur santé physique
                et mentale.
              </p>
            </li>
            <li>
              <h4>Harmonisation de l&apos;Espace de Vie</h4>
              <p>
                Une maison harmonisée énergétiquement offre un environnement
                plus serein et équilibré, favorisant la vitalité et le
                bien-être.
              </p>
            </li>
            <li>
              <h4>Prévention des Troubles</h4>
              <p>
                Une expertise géobiologique permet de prévenir divers troubles
                liés à des influences environnementales néfastes, assurant ainsi
                une meilleure qualité de vie.
              </p>
            </li>
          </ul>

          <h2>Harmonisation du Lieu de Vie et de la Santé</h2>
          <p>
            Certaines personnes ressentent de la fatigue ou un stress en entrant
            dans certains lieux, tandis que d&apos;autres retrouvent de la
            vitalité en quittant leur maison pour quelques jours. Ces sensations
            sont souvent dues aux perturbations invisibles qui affectent
            l&apos;atmosphère. La géobiologie fournit des informations cruciales
            pour l&apos;aménagement intérieur, afin de limiter au maximum les
            effets nocifs de ces perturbations.
          </p>
        </section>
      </article>

      <HR css={{ margin: "4 0", width: "100%" }}></HR>

      <Masonry
        dir={["masonry/home/"]}
        masonry={{ width: `1120px`, column: "4", gap: "1rem" }}
      ></Masonry>

      <HR css={{ margin: "4 0", width: "100%" }}></HR>

      <article className="article article_home">
        <h2>Revue de presse</h2>
        <div className="media_home">
          <div className="media_home-video">
            <h3>Interview Youtube</h3>
            <div className="media_home-video--container">
              <iframe
                src="https://www.youtube-nocookie.com/embed/wbn2-KDPDhQ?si=u_SHtElgQ4YPjuUy"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p>
                Dans cette vidéo, David Michel, géobiologue et guerrier de
                lumière, discute de son travail d&apos;harmonisation des
                énergies dans les habitats. Il explique l&apos;importance de la
                géobiologie pour équilibrer les énergies négatives et positives
                dans les maisons, les fermes et les lieux de vie. David partage
                également des anecdotes personnelles sur son parcours et la
                façon dont il aide ses clients à retrouver un bien-être
                énergétique. La vidéo souligne l&apos;importance de la prière,
                de la gratitude et de l&apos;amour dans le travail énergétique.
              </p>
            </div>

            <h3>Interview France 3</h3>
            <div className="media_home-video--container">
              <iframe
                src="https://www.youtube-nocookie.com/embed/zvLa5il8CQ4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p>
                Dans cette vidéo, David Michel, géobiologue, explique comment
                les menhirs peuvent neutraliser les énergies négatives et
                revitaliser les terrains perturbés. En visitant une ferme
                maraîchère, il démontre les étapes de la pose d&apos;un menhir,
                depuis l&apos;extraction du granit jusqu&apos;à
                l&apos;installation et l&apos;activation énergétique. La vidéo
                met en lumière les bienfaits de cette pratique ancienne sur la
                santé et le bien-être des habitants, ainsi que sur la
                productivité agricole.
              </p>
            </div>

            <h3>Interview TL7</h3>
            <div className="media_home-video--container">
              <iframe
                src="https://www.dailymotion.com/embed/video/x8qgly1?autoplay=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="media_home-radio">
            <h3>Interview Radio</h3>

            <div className="media_home-radio--content">
              <div className="img_radio">
                <Image
                  src={radio}
                  width={radio.width}
                  height={radio.height}
                  alt="Interview Radio"
                  blurDataURL={radio.blurDataURL}
                  placeholder="blur"
                />
              </div>
              <div className="media_home-radio--player">
                <figure>
                  <figcaption>Reportage David Michel</figcaption>
                  <audio
                    controls
                    src="https://firebasestorage.googleapis.com/v0/b/geobiologie-loire.appspot.com/o/interview_david_michel.mp3?alt=media&token=8f384660-ebca-458e-8dc4-e6c176ed5c1d"
                  >
                    Your browser does not support the
                    <code>audio</code> element.
                  </audio>
                </figure>
                <figure>
                  <figcaption>Recontre avec David Michel</figcaption>
                  <audio
                    controls
                    src="https://firebasestorage.googleapis.com/v0/b/geobiologie-loire.appspot.com/o/recontre_dav_dmichel.mp3?alt=media&token=356bd0af-f7ad-4ea9-98d7-44fb035db2db"
                  >
                    Your browser does not support the
                    <code>audio</code> element.
                  </audio>
                </figure>
                <figure>
                  <figcaption>Rencontre avec David Michel</figcaption>
                  <audio controls src="assets/audio/audio.MP3">
                    Your browser does not support the
                    <code>audio</code> element.
                  </audio>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </article>

      <HR css={{ margin: "4 0", width: "100%" }}></HR>
    </>
  );
}
