import React from "react";
import Link from "next/link";
import S from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={S.wrapper}>
      <section className={S.footer}>
        <div className={S.content}>
          <div className={S.map}>
            <iframe
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              id="gmap_canvas"
              src="https://maps.google.com/maps?width=800&amp;height=700&amp;hl=fr&amp;q=125%20chemin%20du%20moulin%2C%2038410%20Saint-Martin-d'Uriage&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
          <div className={S.list}>
            <header>
              <h2>Zone d'activité</h2>
            </header>
            <div className={S.list_content}>
              <ul>
                <li>Ain</li>
                <li>Ardèche</li>
                <li>Creuse</li>
                <li>Drôme</li>
                <li>Gard</li>
                <li>Hautes-Alpes</li>
                <li>Hautes-Loire</li>
                <li>Hautes-Vienne</li>
              </ul>
              <ul>
                <li>Indre</li>
                <li>Isère</li>
                <li>Loire</li>
                <li>Puy de dôme</li>
                <li>Rhône</li>
                <li>Saône-et-loire</li>
                <li>Vaucluse</li>
                <li>Vienne</li>
              </ul>
            </div>
          </div>
        </div>
        <footer className={S.footer_inside}>
          <p>
            Site web réalisé par R.Parodi pour{" "}
            <Link href="/presentation">
              <a>David Michel, géobiologue.</a>
            </Link>
          </p>
          <Link href="legal">
            <a className={S.fakeButton}>Mentions Legal</a>
          </Link>
          <p>
            {`Les soins procurés ne remplacent en aucun cas l'avis d'un medecin`}
          </p>
        </footer>
      </section>
    </footer>
  );
}
