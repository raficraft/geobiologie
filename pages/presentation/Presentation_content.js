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
            conscience m&apos;a permis de développer des capacités telles que la
            clairvoyance, la clairsentience, et la clairaudience, me rendant
            particulièrement réceptif au mal-être des personnes autour de moi.
          </p>
          <p>
            Après plusieurs expériences dans le milieu corporate, j&apos;ai
            choisi de me détacher d&apos;un système axé sur la compétition, le
            matérialisme et un rythme de vie effréné pour me consacrer
            pleinement à l&apos;étude et la pratique de l&apos;ésotérisme.
          </p>
        </section>

        <section>
          <h3>Formation et influences</h3>
          <p>
            Mon parcours est enrichi par d&apos;intenses périodes de lecture,
            des formations diversifiées en géobiologie, soins énergétiques,
            chamanisme sibérien, et l&apos;interprétation des runes. Les
            rencontres avec des mentors tels qu&apos;une guérisseuse et un
            prêtre alchimiste ont été cruciales pour confirmer que ma vocation
            était de suivre un chemin bien différent, guidé par le destin.
          </p>
        </section>

        <section>
          <h3>Services professionnels en géobiologie et soins énergétiques</h3>
          <p>
            Je propose aujourd&apos;hui des soins énergétiques personnels, des
            harmonisations de lieux à distance, ainsi que des dégagements des
            diverses formes de magies négatives. Ces services sont réalisés dans
            un zome énergétique, une structure en forme de double spirale
            composée de losanges, conçue pour être en harmonie avec les énergies
            du monde vivant.
          </p>
          <p>
            Mon expertise et ma pratique sont reconnues par mon affiliation à la
            Fédération Française de Géobiologie, dont je respecte
            scrupuleusement la charte en m&apos;engageant à exercer avec
            objectivité, humanité et probité.
          </p>
        </section>

        <section>
          <h3>Engagement et philosophie</h3>
          <p>
            Mon objectif est d&apos;aider ceux qui me consultent à trouver des
            solutions à leur mal-être, et à améliorer leur bien-être général. En
            me basant sur une approche holistique et personnalisée, je
            m&apos;efforce de restaurer l&apos;équilibre énergétique et
            spirituel de mes clients, les aidant ainsi à retrouver la paix et la
            sérénité dans leur vie quotidienne.
          </p>
        </section>

        <section>
          <h3>Contactez David Michel pour un accompagnement sur mesure</h3>
          <p>
            Si vous ressentez le besoin d&apos;un accompagnement énergétique ou
            d&apos;une expertise en géobiologie, n&apos;hésitez pas à me
            contacter. Ensemble, explorons les solutions adaptées à votre
            situation et travaillons à rétablir votre bien-être.
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
    </>
  );
}
