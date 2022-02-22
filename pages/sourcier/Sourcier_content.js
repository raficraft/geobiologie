import React from "react";
import HR from "../../engine/component/atomic/HR";

export default function Sourcier_content() {
  return (
    <>
      <article className="article article_home">
        <header>
          <h2>Mise en place de puits</h2>
        </header>
        <p>
          Il est important de bien analyser avant de se lancer dans la
          construction d’un puits. Je mets toutes mes compétences à votre
          disposition afin d’établir un état des lieux précis pour votre projet.
          Il est nécessaire d’évaluer la profondeur, le débit et le sens du
          courant de l’eau. Pour cela, je travaille avec des baguettes en Y et
          en L, mais aussi avec mon pendule et diagrammes.
        </p>

        <p>Je travaille actuellement avec deux entreprises.</p>

        <p>
          La première travaille avec une pelle avec benne preneuse, idéale pour
          les sites ayant peu d&rsquo;espace lors du forage du puits (creuse sur
          un diamètre d&rsquo;1,40 mètre, sans dégâts aux abords du puits).
        </p>
        <p>
          Je m&rsquo;associe à la seconde entreprise pour la réalisation de
          travaux où l&rsquo;espace est plus vaste, et pour la création de
          réserves d’eau plus importantes.
        </p>
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
