import React from "react";
import HR from "../../engine/component/atomic/HR";

export default function Menhir_content() {
  return (
    <>
      <article className="article article_home">
        <header>
          <h2>Pose de menhir et pierres levée</h2>
        </header>
        <p>
          Un menhir est comme une antenne, il sert à capter l’énergie du lieu et
          à la faire rayonner autour de lui. Il crée une alchimie entre Terre et
          Ciel (tellurique-cosmique). Poser un menhir permet de dynamiser les
          terrains perturbés et de repousser des réseaux négatifs.{" "}
        </p>
        <p>
          La géo poncture (pose de pierres levées ou menhirs) permet aussi de
          finaliser le rééquilibrage énergétique de la maison et du lieu. D'une
          aide efficace dans les habitations, le menhir devient un outils
          indispensable dans les lieux tel que les exploitations agricoles et
          les maisons de grandes superficies.
        </p>
        Un menhir a aussi pour rôle de contrer les ondes de formes créer par les
        éoliennes, antennes relais, poteaux électriques mal positionnés.
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
