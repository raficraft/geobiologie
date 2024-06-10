import React from "react";
import Image from "next/image";

import embed from "../../../public/assets/img/masonry/soins/energie/energie.jpg";

export default function EnergieContent() {
  return (
    <article className="article article_home">
      <header>
        <h1>
          Soins Énergétiques Professionnels - Boostez Votre Bien-Être et Votre
          Énergie Vitale
        </h1>
      </header>

      <div className="embed_image embed_image--portrait">
        <Image
          src={embed}
          width={embed.width}
          height={embed.height}
          alt="Logo en forme de pendule"
          blurDataURL={embed.blurDataURL}
          placeholder="blur"
        />
      </div>

      <section>
        <h2>Découvrez les soins énergétiques de David Michel</h2>
        <h3>Qu&rsquo;est-ce qu&rsquo;un soin énergétique ?</h3>
        <p>
          Les soins énergétiques sont des pratiques ancestrales visant à
          rééquilibrer l&rsquo;énergie vitale du corps et de l&rsquo;esprit. Ils
          peuvent être réalisés à distance, à partir d&rsquo;une photographie de
          la personne, ou directement sur place, au sein de notre espace
          énergétique spécialement conçu pour maximiser les bienfaits des
          séances.
        </p>
      </section>

      <section>
        <h2>Les Bienfaits des Soins Énergétiques</h2>
        <ul>
          <li>
            <h3>Élévation du Taux Énergétique</h3>
            <p>
              Idéal en cas de fatigue persistante, de stress intense, ou après
              avoir été exposé à des énergies négatives telles que les entités,
              le mauvais œil, ou la magie noire.
            </p>
          </li>
          <li>
            <h3>Harmonisation du Flux Énergétique</h3>
            <p>
              Les séances permettent d&rsquo;harmoniser les flux d&rsquo;énergie
              entre le corps et l&rsquo;esprit, favorisant ainsi un état de
              bien-être général.
            </p>
          </li>
          <li>
            <h3>Purification des Corps Subtils</h3>
            <p>
              Nos soins énergétiques purifient tous les corps subtils, éliminant
              les blocages et les énergies stagnantes.
            </p>
          </li>
          <li>
            <h3>Déblocage et Rééquilibrage des Chakras</h3>
            <p>
              Chaque chakra joue un rôle crucial dans la santé énergétique. Nous
              travaillons sur chaque chakra pour assurer leur bon fonctionnement
              et leur équilibre.
            </p>
          </li>
          <li>
            <h3>Renforcement du Système Immunitaire</h3>
            <p>
              En élevant votre taux énergétique, nous renforçons également vos
              défenses immunitaires, vous rendant plus résistant aux maladies.
            </p>
          </li>
        </ul>
      </section>

      <section>
        <h2>Comment se déroule une séance de soin énergétique ?</h2>
        <p>
          Lors d&rsquo;une séance de soin énergétique, nous utilisons diverses
          techniques pour canaliser et diriger l&rsquo;énergie vers les zones de
          votre corps qui en ont le plus besoin. Nos méthodes incluent
          l&rsquo;utilisation de cristaux, de pendules, et d&rsquo;autres outils
          énergétiques pour maximiser les effets thérapeutiques.
        </p>
      </section>

      <section>
        <h2>À qui s&rsquo;adressent nos soins énergétiques ?</h2>
        <p>
          Nos soins énergétiques s&rsquo;adressent à toute personne souhaitant
          améliorer son bien-être physique et mental, que vous soyez :
        </p>
        <ul>
          <li>En quête de relaxation et de réduction du stress.</li>
          <li>
            À la recherche de solutions naturelles pour augmenter votre énergie
            et vitalité.
          </li>
          <li>
            Soucieux de purifier et protéger votre aura et vos corps subtils.
          </li>
          <li>
            Désireux de débloquer et équilibrer vos chakras pour une meilleure
            santé globale.
          </li>
        </ul>
      </section>

      <section>
        <h2>Pourquoi choisir David Michel ?</h2>
        <ul>
          <li>
            <strong>Expertise et expérience :</strong> Avec 10 années
            d&rsquo;expérience dans le domaine des soins énergétiques et de la
            géobiologie, nous avons aidé de nombreuses personnes à retrouver
            leur équilibre énergétique.
          </li>
          <li>
            <strong>Approche personnalisée :</strong> Chaque séance est adaptée
            aux besoins spécifiques de chaque client, garantissant ainsi des
            résultats optimaux.
          </li>
          <li>
            <strong>Espace énergétique dédié :</strong> Notre zome énergétique
            est un lieu spécialement conçu pour favoriser la circulation des
            énergies et amplifier les effets de nos soins.
          </li>
        </ul>
      </section>

      <section>
        <h2>Contactez-nous dès aujourd&rsquo;hui !</h2>
        <p>
          Prenez rendez-vous pour une séance de soin énergétique et ressentez
          les bienfaits d&rsquo;une énergie renouvelée. Que ce soit à distance
          ou sur place, nous sommes là pour vous accompagner vers un mieux-être
          global.
        </p>
      </section>
    </article>
  );
}
