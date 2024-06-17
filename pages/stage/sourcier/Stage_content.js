import React from "react";
import Image_WITH_Lightbox from "../../../engine/component/Image_WITH_Lightbox/Image_WITH_Lightbox";
import HR from "../../../engine/component/atomic/HR";

import stage_sourcier_low from "./../../../public/assets/img/stage/LOW/stage_sourcier.jpg";
import stage_sourcier_middle from "./../../../public/assets/img/stage/MIDDLE/stage_sourcier.jpg";

import stage_geobiologie_low from "./../../../public/assets/img/stage/LOW/stage_geobiologie.jpg";
import stage_geobiologie_middle from "./../../../public/assets/img/stage/MIDDLE/stage_geobiologie.jpg";

import stage_protection_low from "./../../../public/assets/img/stage/LOW/stage_protection.jpg";
import stage_protection_middle from "./../../../public/assets/img/stage/MIDDLE/stage_protection.jpg";

export default function Stage_content() {
  return (
    <>
      <article className="article article_home">
        <header>
          <h1>
            Stage Initiatique Sourcier - Maîtrisez l&apos;Art de la Détection de
            l&apos;Eau
          </h1>
        </header>
        <div className="content_AND_image">
          <section className="content_AND_image--content">
            <h2>Découvrez le stage initiatique sourcier avec David Michel</h2>

            <h3>Objectifs du Stage</h3>
            <ul>
              <li>
                <h4>
                  Connaître la notion de filon d&apos;eau, une source, une nappe
                </h4>
                <p>
                  Apprenez à identifier et comprendre les différentes formations
                  d&apos;eau souterraine, y compris les filons d&apos;eau, les
                  sources et les nappes phréatiques.
                </p>
              </li>
              <li>
                <h4>Savoir repérer des formes pensées</h4>
                <p>
                  Acquérez la capacité de détecter des influences énergétiques
                  et des formes pensées qui peuvent affecter la recherche et la
                  qualité de l&apos;eau.
                </p>
              </li>
              <li>
                <h4>
                  Reconnaître des poches d&apos;eau et l&apos;eau de surface
                </h4>
                <p>
                  Distinguez entre les poches d&apos;eau souterraine et
                  l&apos;eau de surface, et apprenez à évaluer leur importance
                  pour l&apos;utilisation humaine et agricole.
                </p>
              </li>
              <li>
                <h4>
                  Savoir utiliser plusieurs outils pour détecter l&apos;eau ;
                  lobe antenne, baguette en L, pendule
                </h4>
                <p>
                  Maîtrisez l&apos;utilisation de divers outils traditionnels et
                  modernes pour localiser efficacement les sources d&apos;eau
                  souterraine.
                </p>
              </li>
              <li>
                <h4>Analyser le contexte hydrologique environnant</h4>
                <p>
                  Étudiez l&apos;environnement hydrologique pour mieux
                  comprendre comment les caractéristiques géologiques et les
                  activités humaines influencent la disponibilité et la qualité
                  de l&apos;eau.
                </p>
              </li>
              <li>
                <h4>Avoir la bonne convention mentale</h4>
                <p>
                  Développez l&apos;attitude mentale et les conventions de
                  pensée nécessaires pour réussir dans le métier de sourcier, en
                  renforçant la sensibilité et la réceptivité aux signaux
                  environnementaux.
                </p>
              </li>
              <li>
                <h4>
                  Savoir utiliser les diagrammes (eau potable ou non, débit,
                  profondeur)
                </h4>
                <p>
                  Utilisez des diagrammes pour évaluer des paramètres critiques
                  tels que la potabilité de l&apos;eau, son débit et sa
                  profondeur, essentiels pour la planification des ressources en
                  eau.
                </p>
              </li>
              <li>
                <h4>Repérer le sens du courant</h4>
                <p>
                  Identifiez la direction du flux des eaux souterraines, une
                  compétence clé pour déterminer les meilleurs sites de forage
                  et de puits.
                </p>
              </li>
              <li>
                <h4>Repérer le point le plus approprié pour forage et puits</h4>
                <p>
                  Apprenez à sélectionner les sites optimaux pour le forage de
                  puits, en maximisant l&apos;efficacité et en minimisant les
                  impacts environnementaux.
                </p>
              </li>
            </ul>

            <h3>Pourquoi Participer à ce Stage ?</h3>
            <ul>
              <li>
                <h4>Expertise Professionnelle</h4>
                <p>
                  Bénéficiez de l&apos;expérience et des connaissances
                  d&apos;experts reconnus dans le domaine de la détection de
                  l&apos;eau.
                </p>
              </li>
              <li>
                <h4>Approche Pratique</h4>
                <p>
                  Engagez-vous dans des exercices pratiques et des
                  démonstrations sur le terrain pour solidifier votre
                  apprentissage.
                </p>
              </li>
              <li>
                <h4>Petits Groupes</h4>
                <p>
                  Nous limitons la taille des groupes pour assurer une attention
                  personnalisée et une expérience d&apos;apprentissage de
                  qualité.
                </p>
              </li>
              <li>
                <h4>Certification</h4>
                <p>
                  Recevez une certification à la fin du stage, attestant de vos
                  nouvelles compétences en tant que sourcier.
                </p>
              </li>
            </ul>

            <p>
              Pour vous inscrire ou obtenir plus d&apos;informations sur notre
              stage initiatique sourcier, veuillez visiter notre site web ou
              nous contacter directement. Nous sommes ravis de vous guider dans
              votre parcours pour devenir un sourcier compétent.
            </p>
            <p>
              David Michel - Votre partenaire en exploration et détection
              d&apos;eau
            </p>
          </section>
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
    </>
  );
}
