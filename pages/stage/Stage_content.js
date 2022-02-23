import React from "react";
import HR from "../../engine/component/atomic/HR";

export default function Stage_content() {
  return (
    <>
      <article className="article article_home">
        <header>
          <h2>Stage initiatique sourcier</h2>
        </header>
        <p>
          <b>Objectifs : </b>
        </p>
        <ul>
          <li>Connaître la notion de filon d'eau, une source, une nappe.</li>
          <li>Savoir repérer de formes pensées.</li>
          <li>Reconnaitre des poches d'eau et l'eau de surface.</li>
          <li>
            Savoir utiliser plusieurs outils pour détecter l'eau ; lobe antenne,
            baguette en L, pendule.
          </li>
          <li>Analyser le contexte hydrologique environnant</li>
          <li>Avoir la bonne convention mentale</li>
          <li>
            Savoir utiliser les diagrammes (eau potable ou non, débit,
            profondeur)
          </li>
          <li>Repérer le sens du courant</li>
          <li>Repérer le point le plus appropier pour forage et puits.</li>
        </ul>
        <h3>Pourquoi une expertise Géobiologique ?</h3>
        <p></p>
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
