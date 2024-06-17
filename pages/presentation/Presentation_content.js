import Image from "next/image";
import React from "react";
import HR from "../../engine/component/atomic/HR";
import portrait from "./../../public/assets/img/illustration/david/david_michel.jpg";

export default function PresentationContent() {
  return (
    <>
      <article className="article article_home">
        <header>
          <h1>David Michel : Votre Expert en Énergétique et Géobiologie</h1>
        </header>
        <div className="embed_image embed_image--portrait">
          <Image
            src={portrait}
            width={portrait.width}
            height={portrait.height}
            alt="David Michel"
            blurDataURL={portrait.blurDataURL}
            placeholder="blur"
          />
        </div>

        <section>
          <h2>
            Découvrez le parcours unique de David Michel, spécialiste en soins
            énergétiques et géobiologie
          </h2>

          <h3>Cheminement vers mon vrai chemin de vie</h3>
          <p>
            La confrontation avec des défis personnels a profondément transformé
            ma perception du monde, éveillant une sensibilité particulière aux
            dimensions énergétiques de notre environnement. Cette prise de
            conscience m'a permis de développer des capacités telles que la
            clairvoyance, la clairsentience, et la clairaudience, me rendant
            particulièrement réceptif au mal-être des personnes autour de moi.
          </p>
          <p>
            Après plusieurs expériences dans le milieu corporate, j'ai choisi de
            me détacher d'un système axé sur la compétition, le matérialisme et
            un rythme de vie effréné pour me consacrer pleinement à l'étude et
            la pratique de l'ésotérisme.
          </p>
        </section>

        <section>
          <h3>Formation et influences</h3>
          <p>
            Mon parcours est enrichi par d'intenses périodes de lecture, des
            formations diversifiées en géobiologie, soins énergétiques,
            chamanisme sibérien, et l'interprétation des runes. Les rencontres
            avec des mentors tels qu'une guérisseuse et un prêtre alchimiste ont
            été cruciales pour confirmer que ma vocation était de suivre un
            chemin bien différent, guidé par le destin.
          </p>
        </section>

        <section>
          <h3>Services professionnels en géobiologie et soins énergétiques</h3>
          <p>
            Je propose aujourd'hui des soins énergétiques personnels, des
            harmonisations de lieux à distance, ainsi que des dégagements des
            diverses formes de magies négatives. Ces services sont réalisés dans
            un zome énergétique, une structure en forme de double spirale
            composée de losanges, conçue pour être en harmonie avec les énergies
            du monde vivant.
          </p>
          <p>
            Mon expertise et ma pratique sont reconnues par mon affiliation à la
            Fédération Française de Géobiologie, dont je respecte
            scrupuleusement la charte en m'engageant à exercer avec objectivité,
            humanité et probité.
          </p>
        </section>

        <section>
          <h3>Engagement et philosophie</h3>
          <p>
            Mon objectif est d'aider ceux qui me consultent à trouver des
            solutions à leur mal-être, et à améliorer leur bien-être général. En
            me basant sur une approche holistique et personnalisée, je m'efforce
            de restaurer l'équilibre énergétique et spirituel de mes clients,
            les aidant ainsi à retrouver la paix et la sérénité dans leur vie
            quotidienne.
          </p>
        </section>

        <section>
          <h3>Contactez David Michel pour un accompagnement sur mesure</h3>
          <p>
            Si vous ressentez le besoin d'un accompagnement énergétique ou d'une
            expertise en géobiologie, n'hésitez pas à me contacter. Ensemble,
            explorons les solutions adaptées à votre situation et travaillons à
            rétablir votre bien-être.
          </p>
          <p>
            David Michel - Spécialiste reconnu en soins énergétiques et
            géobiologie, engagé à enrichir votre parcours de vie.
          </p>
        </section>
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
            Présentation de Monique Sauzay - Spécialiste en Dessins Vibratoires
            et Guérison Énergétique
          </h1>
        </header>

        <section>
          <h2>Découvrez l'approche complémentaire de Monique Sauzay</h2>
          <p>
            Mme Monique Sauzay apporte une dimension unique et complémentaire à
            mon travail. Son expertise et ses techniques ont profondément
            enrichi ma pratique et ma vie personnelle. Voici pourquoi je tiens à
            vous la présenter.
          </p>
        </section>

        <section>
          <h3>Séances de Guérison Énergétique</h3>
          <p>
            Les séances de Monique peuvent se dérouler à distance ou en
            présentiel. Elles visent à libérer les mémoires, inscriptions
            négatives, tensions, blocages et dysfonctionnements. Grâce à une
            purification des centres d’énergie, des plans subtils et de l’aura,
            ces séances permettent de se reconnecter aux énergies de la Terre,
            du Ciel et de l’Univers. L'objectif est de retrouver la paix
            intérieure, le bien-être et la santé.
          </p>
        </section>

        <section>
          <h3>Dessins Sacrés de l'Âme</h3>
          <p>
            Monique Sauzay utilise les dessins sacrés de l'âme, également
            appelés dessins vibratoires, pour aider à la transformation et à la
            guérison. Réalisés au crayon, pastels ou peinture, ces dessins
            agissent comme de puissants outils de conscience et de développement
            personnel. En état modifié de conscience et en connexion avec la
            Source, Monique crée des œuvres qui libèrent les tensions, les peurs
            et les blessures profondes, permettant ainsi de lâcher prise sur
            tout ce qui freine notre évolution spirituelle.
          </p>
        </section>

        <section>
          <h3>Les Bienfaits des Dessins Vibratoires</h3>
          <ul>
            <li>
              <h4>Transformation et Guérison</h4>
              <p>
                Les dessins sacrés agissent sur notre psyché et nos corps
                subtils grâce aux codes de Lumière et d'Amour intégrés dans les
                formes, mouvements et couleurs.
              </p>
            </li>
            <li>
              <h4>Révélation de l'Essence Divine</h4>
              <p>
                Ils permettent à notre aura de rayonner et de s'illuminer,
                facilitant la réconciliation avec notre Essence Divine.
              </p>
            </li>
            <li>
              <h4>Développement des Capacités</h4>
              <p>
                Les dessins de l’aura révèlent nos capacités artistiques,
                créatives et médiumniques, ainsi que nos faiblesses, nous
                guidant sur les aspects à travailler pour notre évolution.
              </p>
            </li>
          </ul>
        </section>

        <section>
          <h3>Outils d’Évolution et de Réalisation de Soi</h3>
          <p>
            Les créations de Monique Sauzay sont de merveilleux outils pour
            l’évolution personnelle et la réalisation de soi. Elles offrent une
            opportunité unique de prendre conscience de notre véritable
            potentiel divin et de l'utiliser pour notre guérison et notre
            croissance spirituelle.
          </p>
        </section>

        <section>
          <h3>Contactez Monique Sauzay</h3>
          <p>
            Si vous souhaitez explorer les bienfaits des dessins vibratoires et
            des séances de guérison énergétique, n'hésitez pas à contacter
            Monique Sauzay. Elle vous accompagnera avec bienveillance dans votre
            cheminement vers la libération émotionnelle, la guérison et
            l'épanouissement spirituel.
          </p>
          <p>
            Monique Sauzay - Spécialiste en Dessins Vibratoires et Guérison
            Énergétique, dédiée à votre bien-être et à votre évolution
            spirituelle.
          </p>
        </section>
      </article>
    </>
  );
}
