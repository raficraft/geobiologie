import React from "react";
import HR from "../../engine/component/atomic/HR";
import Image_WITH_Lightbox from "../../engine/component/Image_WITH_Lightbox/Image_WITH_Lightbox";

import stage_sourcier_low from "./../../public/assets/img/stage/LOW/stage_sourcier.jpg";
import stage_sourcier_middle from "./../../public/assets/img/stage/MIDDLE/stage_sourcier.jpg";

import stage_geobiologie_low from "./../../public/assets/img/stage/LOW/stage_geobiologie.jpg";
import stage_geobiologie_middle from "./../../public/assets/img/stage/MIDDLE/stage_geobiologie.jpg";

import stage_protection_low from "./../../public/assets/img/stage/LOW/stage_protection.jpg";
import stage_protection_middle from "./../../public/assets/img/stage/MIDDLE/stage_protection.jpg";

export default function Stage_content() {
  return (
    <>
      <article className="article article_home">
        <header>
          <h2>Stage initiatique sourcier</h2>
        </header>
        <div className="content_AND_image">
          <article className="content_AND_image--content">
            <p>
              <b>Objectifs : </b>
            </p>
            <ul>
              <li>
                Connaître la notion de filon d&rsquo;eau, une source, une nappe.
              </li>
              <li>Savoir repérer des formes pensées.</li>
              <li>
                Reconnaitre des poches d&rsquo;eau et l&rsquo;eau de surface.
              </li>
              <li>
                Savoir utiliser plusieurs outils pour détecter l&rsquo;eau ;
                lobe antenne, baguette en L, pendule.
              </li>
              <li>Analyser le contexte hydrologique environnant</li>
              <li>Avoir la bonne convention mentale</li>
              <li>
                Savoir utiliser les diagrammes (eau potable ou non, débit,
                profondeur)
              </li>
              <li>Repérer le sens du courant</li>
              <li>Repérer le point le plus approprié pour forage et puits.</li>
            </ul>
          </article>
          <aside>
            <Image_WITH_Lightbox
              src={stage_sourcier_low}
              lightbox={true}
              src_ligthbox={stage_sourcier_middle}
            ></Image_WITH_Lightbox>
          </aside>
        </div>
      </article>

      <HR
        css={{
          margin: "6 0",
          width: "100%",
        }}
      ></HR>

      <article className="article article_home">
        <header>
          <h2>Stage initiatique géobiolologie</h2>
        </header>
        <div className="content_AND_image">
          <article className="content_AND_image--content">
            <p>
              <b>Objectifs : </b>
            </p>
            <ul>
              <li>
                Apprendre à tracer les hexagrammes et pentagrammes dans les
                quatre directions.
              </li>
              <li>
                Comprendre les eaux souterraines, failles sèches, failles
                humides, réseaux Hartman et Cury, cheminées cosmo-telluriques et
                vortex
              </li>
              <li>
                Savoir se servir de son champ d&rsquo;énergie vitale ou bio
                champ d&rsquo;energie vitale ou bio champs.
              </li>
              <li>
                Comprendre l&rsquo;utilité d&rsquo;un menhir, la pose et le
                pentagramme
              </li>
              <li>Découvrir les esprits de la nature</li>
              <li>Préparation avant une étude géobiologique</li>
            </ul>

            <p>
              <b>Application : </b>
            </p>
            <ul>
              <li>
                Savoir utiliser le pendule, les diagrammes, le cadran Bovis, les
                échelles de nocivité et le diagramme de l&rsquo;équilibre cosmo
                tellurique.
              </li>
              <li>
                Exercice sur le terrain pour rechercher et ressentir ce qui a
                été vu dans la partie théorique
              </li>
              <li>
                Pose d&rsquo;un menhir pour exemple sur le terrain et
                méthodologie
              </li>
              <li>
                Travail sur un plan pour application des méthodes vues dans la
                journée.
              </li>
            </ul>
          </article>
          <aside>
            <Image_WITH_Lightbox
              src={stage_geobiologie_low}
              lightbox={true}
              src_ligthbox={stage_geobiologie_middle}
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

      <article className="article article_home">
        <header>
          <h2>Stage initiatique protection</h2>
        </header>
        <div className="content_AND_image">
          <article className="content_AND_image--content">
            <p>
              <b>Objectifs : </b>
            </p>
            <ul>
              <li>
                Soins aux 7 bois de cristal pour augmenter les vibrations.
              </li>
              <li>
                Apprendre à tracer les héxagrammes et pentagrammes dans les
                quatres directions.
              </li>
              <li>
                Connaître et apprendre à utiliser son champ d&rsquo;energie
                vitale ou bio champs.
              </li>
              <li>
                Connaître les différents corps subtils qui nous entourent.
              </li>
              <li>
                Connaître et se protéger des larves, entités, magie noire,
                vampirisme énérgetique...
              </li>
              <li>Méthodologie passage d&rsquo;âme ou autres énergies.</li>
              <li>
                Travail avec le double de lumière et cape d&rsquo;invisibilité
              </li>
              <li>Distinguer l&rsquo;énergie positive/négative</li>
              <li>Consécration d&rsquo;un brûle-parfum</li>
              <li>
                Prières pour la libération et la réintégration des esprits
                minéraux
              </li>
              <li>Utiliser les cinq solides de Platon</li>
              <li>Découverte des esprits de la nature</li>
            </ul>

            <p>
              <b>Application : </b>
            </p>
            <ul>
              <li>
                Savoir utiliser le pendule et le diagramme d&rsquo;unités Bovis
              </li>
              <li>Travail sur photo et sur plan des méthodes de la journée</li>
            </ul>
          </article>
          <aside>
            <Image_WITH_Lightbox
              src={stage_protection_low}
              lightbox={true}
              src_ligthbox={stage_protection_middle}
            ></Image_WITH_Lightbox>
          </aside>
        </div>
      </article>
    </>
  );
}
