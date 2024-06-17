import React from "react";
import pdf from "./../../../public/assets/img/illustration/ondes/capture.jpg";
import Image from "next/image";
import Link from "next/link";

export default function OndesContent() {
  return (
    <article className="article article_home article_2col">
      <header className="article_2col--header">
        <h1>Pose de Protection Électrosensible</h1>
      </header>
      <section className="article_2col--content">
        <div className="article_2col--firstChild">
          <h2>Protégez-vous des Interférences Électromagnétiques</h2>
          <p>
            Découvrez la pose de protection électrosensible avec David Michel
          </p>

          <h3>
            Pourquoi est-ce important de se protéger contre les interférences
            électromagnétiques (EMI) ?
          </h3>
          <p>
            L&apos;énergie électrique et magnétique émise par de nombreux
            appareils électroniques peut perturber le fonctionnement
            d&apos;autres appareils électroniques. La majorité des problèmes
            d&apos;interférences électromagnétiques (EMI) proviennent de la
            bande des radiofréquences (RF) comprise entre 30 kHz et 10 GHz. Le
            blindage contre les EMI et/ou les RF est essentiel pour diverses
            raisons, notamment pour exclure et bloquer les signaux indésirables
            et pour empêcher l&apos;interception non autorisée de signaux.
          </p>

          <h3>
            Les raisons d&apos;installer une protection contre les EMI et RF
          </h3>
          <ul>
            <li>
              <h4>Exclusion des Signaux Indésirables</h4>
              <p>
                Éliminer les signaux électromagnétiques ou RF qui peuvent
                perturber les appareils électroniques sensibles.
              </p>
            </li>
            <li>
              <h4>Blocage des Signaux Non Autorisés</h4>
              <p>
                Empêcher les signaux électromagnétiques indésirables de pénétrer
                dans des zones sensibles.
              </p>
            </li>
            <li>
              <h4>Prévention de l&apos;Interception Non Autorisée</h4>
              <p>
                Protéger contre l&apos;interception non autorisée de signaux
                micro-ondes et radio, assurant ainsi la confidentialité des
                communications.
              </p>
            </li>
          </ul>

          <h3>Les avantages des films de protection solaires métallisés</h3>
          <ul>
            <li>
              <h4>Réflexion de l&apos;Énergie Solaire</h4>
              <p>
                Réduire la chaleur transmise par le soleil, contribuant à une
                meilleure régulation de la température intérieure.
              </p>
            </li>
            <li>
              <h4>Réduction de la Lumière Visible</h4>
              <p>
                Atténuer l&apos;intensité de la lumière visible, améliorant
                ainsi le confort visuel à l&apos;intérieur.
              </p>
            </li>
            <li>
              <h4>Atténuation des Fréquences RF</h4>
              <p>
                Réduire ou atténuer les fréquences radio ou de communication du
                spectre électromagnétique, protégeant ainsi les appareils
                électroniques sensibles.
              </p>
            </li>
          </ul>
        </div>

        <div className="article_2col--lastChild shadow">
          <Link href="/assets/docs/Filtration_des_ondes.pdf">
            <Image
              src={pdf}
              width={pdf.width}
              height={pdf.height}
              alt="Logo fédération française de géobiologie"
              blurDataURL={pdf.blurDataURL}
              placeholder="blur"
              className="pointer"
            />
          </Link>
          <p className="text-center">
            Document Pdf. Cliquer sur l&apos;image pour consulter
          </p>
        </div>
      </section>

      <section>
        <h2>Comment se déroule la pose de protection électrosensible ?</h2>
        <p>
          La pose de protection électrosensible implique plusieurs étapes clés
          pour garantir une efficacité optimale :
        </p>
        <ul>
          <li>
            <h4>Évaluation des Besoins</h4>
            <p>
              Analyse des appareils électroniques et de l&apos;environnement
              pour déterminer les sources potentielles d&apos;interférences
              électromagnétiques.
            </p>
          </li>
          <li>
            <h4>Sélection des Matériaux</h4>
            <p>
              Choix des films de protection métallisés adaptés aux besoins
              spécifiques de l&apos;espace à protéger.
            </p>
          </li>
          <li>
            <h4>Installation Professionnelle</h4>
            <p>
              Application des films de protection sur les surfaces adéquates par
              des professionnels qualifiés, garantissant une pose précise et
              efficace.
            </p>
          </li>
          <li>
            <h4>Tests et Vérifications</h4>
            <p>
              Réalisation de tests pour s&apos;assurer que les interférences
              électromagnétiques sont effectivement atténuées ou éliminées.
            </p>
          </li>
        </ul>
      </section>

      <section>
        <h2>
          Pourquoi choisir David Michel pour la pose de protection
          électrosensible ?
        </h2>
        <ul>
          <li>
            <h4>Expertise et expérience</h4>
            <p>
              Avec [X] années d&apos;expérience dans le domaine de la protection
              électrosensible, nous avons aidé de nombreux clients à protéger
              leurs appareils et leurs espaces contre les interférences
              électromagnétiques.
            </p>
          </li>
          <li>
            <h4>Matériaux de haute qualité</h4>
            <p>
              Nous utilisons uniquement des matériaux de haute qualité pour
              garantir une protection efficace et durable contre les EMI et les
              RF.
            </p>
          </li>
          <li>
            <h4>Service personnalisé</h4>
            <p>
              Chaque projet est unique et nous adaptons nos solutions en
              fonction des besoins spécifiques de nos clients.
            </p>
          </li>
        </ul>
      </section>

      <section>
        <h2>
          Contactez-nous pour une consultation en protection électrosensible
        </h2>
        <p>
          Si vous souhaitez protéger vos appareils électroniques et votre espace
          contre les interférences électromagnétiques, n&apos;hésitez pas à nous
          contacter pour une consultation. Nous sommes là pour vous offrir des
          solutions de protection sur mesure et efficaces.
        </p>
      </section>
    </article>
  );
}
