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

            <h3>Détails et Inscription</h3>
            <ul>
              <li>Durée : [X jours/semaines]</li>
              <li>Lieu : [Localisation précise]</li>
              <li>Coût : [Prix du stage]</li>
              <li>Prochaines Dates : [Indiquer les dates disponibles]</li>
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
              Explorez les profondeurs de la géobiologie avec [Nom de votre
              entreprise]
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

            <h3>Détails et Inscription</h3>
            <ul>
              <li>Durée : [X jours/semaines]</li>
              <li>Lieu : [Localisation précise]</li>
              <li>Coût : [Prix du stage]</li>
              <li>Prochaines Dates : [Indiquer les dates disponibles]</li>
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
          <h1>
            Stage Initiatique Protection - Maîtrisez les Techniques de Défense
            Énergétique
          </h1>
        </header>
        <div className="content_AND_image">
          <section className="content_AND_image--content">
            <h2>
              Explorez les secrets de la protection énergétique avec [Nom de
              votre entreprise]
            </h2>

            <h3>Objectifs du Stage</h3>
            <ul>
              <li>
                <h4>
                  Soins aux 7 bols de cristal pour augmenter les vibrations
                </h4>
                <p>
                  Découvrez les pratiques ancestrales pour utiliser les 7 bois
                  de cristal afin d&apos;augmenter les vibrations et renforcer
                  votre aura.
                </p>
              </li>
              <li>
                <h4>
                  Apprendre à tracer les hexagrammes et pentagrammes dans les
                  quatre directions
                </h4>
                <p>
                  Maîtrisez l&apos;art du tracé des symboles sacrés pour créer
                  des barrières de protection et diriger les énergies
                  bénéfiques.
                </p>
              </li>
              <li>
                <h4>
                  Connaître et apprendre à utiliser son champ d&apos;énergie
                  vitale ou biochamps
                </h4>
                <p>
                  Explorez les techniques pour comprendre et manipuler votre
                  champ d&apos;énergie vitale afin de renforcer votre protection
                  personnelle.
                </p>
              </li>
              <li>
                <h4>
                  Connaître les différents corps subtils qui nous entourent
                </h4>
                <p>
                  Étudiez les différents plans énergétiques et les corps subtils
                  pour mieux comprendre les influences énergétiques extérieures.
                </p>
              </li>
              <li>
                <h4>
                  Connaître et se protéger des larves, entités, magie noire,
                  vampirisme énergétique
                </h4>
                <p>
                  Apprenez à reconnaître et à vous protéger contre les
                  influences énergétiques négatives et les attaques psychiques.
                </p>
              </li>
              <li>
                <h4>Méthodologie passage d&apos;âme ou autres énergies</h4>
                <p>
                  Familiarisez-vous avec les processus de transition énergétique
                  et apprenez à les gérer de manière appropriée pour assurer la
                  protection.
                </p>
              </li>
              <li>
                <h4>
                  Travail avec le double de lumière et cape d&apos;invisibilité
                </h4>
                <p>
                  Explorez des techniques avancées pour renforcer votre
                  protection énergétique et vous dissimuler des influences
                  indésirables.
                </p>
              </li>
              <li>
                <h4>Distinguer l&apos;énergie positive/négative</h4>
                <p>
                  Développez votre discernement énergétique pour identifier les
                  énergies bénéfiques et nuisibles dans votre environnement.
                </p>
              </li>
              <li>
                <h4>Consécration d&apos;un brûle-parfum</h4>
                <p>
                  Apprenez des rituels de consécration pour purifier et
                  sanctifier votre espace personnel avec un brûle-parfum.
                </p>
              </li>
              <li>
                <h4>
                  Prières pour la libération et la réintégration des esprits
                  minéraux
                </h4>
                <p>
                  Explorez des prières et des rituels pour libérer et réintégrer
                  les esprits minéraux dans le flux naturel de l&apos;énergie.
                </p>
              </li>
              <li>
                <h4>Utiliser les cinq solides de Platon</h4>
                <p>
                  Intégrez les cinq solides de Platon dans votre pratique pour
                  renforcer votre protection énergétique et votre connexion
                  spirituelle.
                </p>
              </li>
              <li>
                <h4>Découverte des esprits de la nature</h4>
                <p>
                  Plongez dans le royaume des esprits de la nature et apprenez à
                  collaborer avec eux pour renforcer votre protection.
                </p>
              </li>
            </ul>

            <h3>Application Pratique</h3>
            <ul>
              <li>
                <h4>
                  Savoir utiliser le pendule et le diagramme d&apos;unités Bovis
                </h4>
                <p>
                  Maîtrisez l&apos;utilisation de ces outils pour mesurer et
                  évaluer les niveaux d&apos;énergie dans votre environnement et
                  dans votre aura.
                </p>
              </li>
              <li>
                <h4>
                  Travail sur photo et sur plan des méthodes de la journée
                </h4>
                <p>
                  Appliquez les techniques apprises lors de ce stage sur des
                  photos et des plans pour renforcer votre protection au
                  quotidien.
                </p>
              </li>
            </ul>

            <h3>Pourquoi Participer à ce Stage ?</h3>
            <ul>
              <li>
                <h4>Sécurité Énergétique</h4>
                <p>
                  Acquérez les connaissances et les compétences nécessaires pour
                  protéger votre énergie et votre bien-être.
                </p>
              </li>
              <li>
                <h4>Expertise Avancée</h4>
                <p>
                  Bénéficiez de l&apos;expertise d&apos;instructeurs
                  expérimentés dans le domaine de la protection énergétique.
                </p>
              </li>
              <li>
                <h4>Transformation Personnelle</h4>
                <p>
                  Expérimentez une transformation personnelle profonde en
                  renforçant votre connexion avec votre propre force intérieure.
                </p>
              </li>
            </ul>

            <h3>Détails et Inscription</h3>
            <ul>
              <li>Durée : [X jours/semaines]</li>
              <li>Lieu : [Localisation précise]</li>
              <li>Coût : [Prix du stage]</li>
              <li>Prochaines Dates : [Indiquer les dates disponibles]</li>
            </ul>
            <p>
              Pour plus d&apos;informations ou pour vous inscrire à notre stage
              initiatique en protection énergétique, veuillez visiter notre site
              web ou nous contacter directement. Protégez-vous et renforcez
              votre pouvoir intérieur avec notre stage dédié à la protection
              énergétique.
            </p>
            <p>
              David Michel - Votre guide vers une protection énergétique
              optimale
            </p>
          </section>
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
