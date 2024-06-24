import React from "react";
import Image_WITH_Lightbox from "../../../engine/component/Image_WITH_Lightbox/Image_WITH_Lightbox";
import HR from "../../../engine/component/atomic/HR";

import stage_low from "./../../../public/assets/img/stage/LOW/stages.jpg";
import stage_middle from "./../../../public/assets/img/stage/MIDDLE/stages.jpg";

export default function Stage_content() {
  return (
    <>
      <article className="article article_home">
        <header>
          <h1>
            Stage Avancé en Géobiologie - Maîtrise des Techniques Ésotériques et
            Énergétiques
          </h1>
        </header>
        <div className="content_AND_image">
          <section className="content_AND_image--content">
            <h2>
              Explorez les profondeurs de la géobiologie avec David Michel
            </h2>

            <h3>Objectifs du Stage</h3>
            <ul>
              <li>
                <h4>
                  Apprendre à tracer les hexagrammes et pentagrammes dans les
                  quatre directions
                </h4>
                <p>
                  Maîtrisez les techniques de tracé de ces puissants symboles
                  ésotériques, utilisés pour canaliser et harmoniser les
                  énergies dans divers contextes.
                </p>
              </li>
              <li>
                <h4>
                  Comprendre les eaux souterraines, failles sèches, failles
                  humides, réseaux Hartman et Curry, cheminées cosmo-telluriques
                  et vortex
                </h4>
                <p>
                  Acquérez une compréhension approfondie des divers phénomènes
                  géologiques et énergétiques, et de leur impact sur
                  l&apos;environnement et la santé.
                </p>
              </li>
              <li>
                <h4>
                  Savoir se servir de son champ d&apos;énergie vitale ou bio
                  champ
                </h4>
                <p>
                  Apprenez à détecter et manipuler votre propre champ
                  énergétique pour une meilleure santé et bien-être.
                </p>
              </li>
              <li>
                <h4>
                  Comprendre l&apos;utilité d&apos;un menhir, la pose et le
                  pentagramme
                </h4>
                <p>
                  Découvrez comment les menhirs et les pentagrammes sont
                  utilisés pour influencer les énergies telluriques et cosmiques
                  dans un lieu.
                </p>
              </li>
              <li>
                <h4>Découvrir les esprits de la nature</h4>
                <p>
                  Initiez-vous à la communication avec les esprits de la nature
                  et à l&apos;intégration de leur sagesse dans les pratiques
                  géobiologiques.
                </p>
              </li>
              <li>
                <h4>Préparation avant une étude géobiologique</h4>
                <p>
                  Développez les compétences nécessaires pour préparer et
                  conduire une étude géobiologique complète.
                </p>
              </li>
            </ul>

            <h3>Application Pratique</h3>
            <ul>
              <li>
                <h4>
                  Savoir utiliser le pendule, les diagrammes, le cadran Bovis,
                  les échelles de nocivité et le diagramme de l&apos;équilibre
                  cosmo-tellurique
                </h4>
                <p>
                  Utilisez divers outils diagnostiques pour mesurer et ajuster
                  les énergies environnementales.
                </p>
              </li>
              <li>
                <h4>
                  Exercice sur le terrain pour rechercher et ressentir ce qui a
                  été vu dans la partie théorique
                </h4>
                <p>
                  Participez à des exercices pratiques pour appliquer et
                  ressentir directement les concepts appris en salle.
                </p>
              </li>
              <li>
                <h4>
                  Pose d&apos;un menhir pour exemple sur le terrain et
                  méthodologie
                </h4>
                <p>
                  Observez et participez à la pose d&apos;un menhir, en
                  apprenant les méthodes et les considérations pratiques.
                </p>
              </li>
              <li>
                <h4>
                  Travail sur un plan pour application des méthodes vues dans la
                  journée
                </h4>
                <p>
                  Mettez en pratique les techniques étudiées en travaillant sur
                  des plans concrets pour l&apos;application des méthodes
                  géobiologiques.
                </p>
              </li>
            </ul>

            <h3>Pourquoi Participer à ce Stage ?</h3>
            <ul>
              <li>
                <h4>Expertise Approfondie</h4>
                <p>
                  Profitez de l&apos;expérience et des connaissances
                  approfondies de spécialistes en géobiologie et en énergétique.
                </p>
              </li>
              <li>
                <h4>Approche Holistique</h4>
                <p>
                  Engagez-vous dans une formation qui intègre des aspects
                  scientifiques, spirituels, et pratiques.
                </p>
              </li>
              <li>
                <h4>Certification</h4>
                <p>
                  Obtenez une certification qui valide vos compétences avancées
                  en géobiologie et techniques énergétiques.
                </p>
              </li>
            </ul>

            <p>
              Pour plus d&apos;informations ou pour vous inscrire à notre stage
              avancé en géobiologie, veuillez visiter notre site web ou nous
              contacter directement. Nous sommes impatients de vous aider à
              explorer et à maîtriser les mystères de la terre et de son
              énergie.
            </p>
            <p>David Michel - Votre guide avancé en géobiologie</p>
          </section>
          <aside>
            <Image_WITH_Lightbox
              src={stage_low}
              lightbox={true}
              src_ligthbox={stage_middle}
            ></Image_WITH_Lightbox>
          </aside>
        </div>
      </article>

      <HR
        css={{
          margin: "4 0",
          width: "100%",
        }}
      ></HR>
    </>
  );
}
