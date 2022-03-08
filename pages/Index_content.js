import React from "react";
import Image from "next/image";
import Link from "next/link";
import presse from "./../public/assets/docs/presse.jpg";
import radio from "./../public/assets/img/illustration/david/radio.jpg";
import HR from "../engine/component/atomic/HR";
import FFG from "./../public/assets/img/illustration/FFG/FFG.png";

export default function Index_content() {
  return (
    <>
      <article className="article article_home">
        <header>
          <h2>A quoi sert la géobiologie ?</h2>
        </header>
        <div className="embed_image">
          <Link href="https://federation-francaise-de-geobiologie.org/">
            <a className="embed_image--link" target="_blank">
              <Image
                src={FFG}
                width={FFG.width}
                height={FFG.height}
                alt="Logo fédération française de géobiologie"
                blurDataURL={FFG.blurDataURL}
                placeholder="blur"
              />

              <p>En savoir +</p>
            </a>
          </Link>
        </div>
        <p>
          La géobiologie étudie les impacts de l&rsquo;environnement sur la
          santé des vivants, c&rsquo;est-à-dire non seulement des humains, mais
          aussi des animaux et des végétaux. Le but de cette pratique est de
          mettre en évidence les perturbations que les cours d&rsquo;eau, les
          cavités vides, les zones de failles, les cheminées cosmo-telluriques,
          les réseaux Hartmann et Curry et autres phénomènes géologiques
          présentent à proximité de l&rsquo;habitation peuvent provoquer.
        </p>
        <h3>Pourquoi une expertise Géobiologique ?</h3>
        <p>
          L&rsquo;exposition à long terme aux diverses nuisances présentes dans
          l&rsquo;environnement peut entraîner des maladies chroniques, des
          allergies, des troubles du sommeil ou même une dépression. Une
          expertise géobiologique permet de déterminer quels sont réellement les
          phénomènes qui nuisent au bien-être d&rsquo;une habitation pour
          ensuite trouver des corrections adéquates. Grâce à ses facultés
          techniques et sensorielles, le spécialiste en géobiologie est en
          mesure de neutraliser les effets des phénomènes et ondes nocives. Une
          expertise géobiologique contribue ainsi à la résolution des problèmes
          physiologiques que les occupants d&rsquo;une maison peuvent avoir.
          Avant d&rsquo;entamer des travaux de construction et de rénovation,
          demander une expertise en géobiologie permet de connaitre
          l&rsquo;emplacement idéal pour les pièces et les modifications à
          apporter à l&rsquo;habitation pour que la qualité de vie et le tonus
          des personnes qui y vivent soient améliorés.
        </p>

        <p>
          La géobiologie étudie aussi la position des antennes relais et des
          pylônes haute tension pour savoir si elles n&rsquo;entrainent pas une
          pollution électrique et électromagnétique au sein de
          l&rsquo;habitation.
        </p>

        <p>
          Les spécialistes en géobiologie se servent également de
          l&rsquo;histoire des lieux pour déterminer s&rsquo;il n&rsquo;y a pas
          de famines, de maladies, de violences ou de guerres qui y ont eu lieu.
          Si c&rsquo;est le cas, les murs et les sols ont pu les mémoriser, ce
          qui peut être à l&rsquo;origine des sensations de mal-être éprouvées
          par une personne quand elle se trouve sur les lieux.
        </p>

        <p>
          Pour déterminer toutes ces perturbations, l&rsquo;expert en
          géobiologie ne mise pas uniquement sur ses sens. Il utilise des outils
          professionnels qui lui permettent de détecter et de mesurer les
          différentes perturbations avec précisions. Pour mesurer le niveau de
          nuisance géotellurique, l&rsquo;expert utilise, par exemple, des
          baguettes rade master et une antenne de Lécher.
        </p>

        <h2>Une harmonisation du lieu de vie et de la santé</h2>

        <p>
          Certaines personnes ressentent de la fatigue ou un stress quand elles
          pénètrent dans un lieu. D&rsquo;autres encore retrouvent de la
          vitalité et voient leurs ennuis de santé disparaître quand elles
          quittent leurs maisons pour quelques jours. Parfois, nous nous sentons
          plus à l&rsquo;aise dans une pièce de notre maison que dans une autre.
          Toutes ces impressions différentes sont dues aux perturbations
          invisibles qui « plombent » notre atmosphère. Pour limiter au maximum
          les effets nocifs de ces perturbations, il est important
          d&rsquo;agencer avec soin les meubles de l&rsquo;habitation. La
          géobiologie apporte les informations utiles dans l&rsquo;aménagement
          de l&rsquo;intérieur.
        </p>

        <Link href="/charte">
          <a>Consulter la Charte de la FFG</a>
        </Link>
      </article>

      <HR
        css={{
          margin: "6 0",
          width: "100%",
        }}
      ></HR>

      <article className="article article_home">
        <h2>Revue de presse</h2>
        {/* VIDEO AND presse */}
        <div className="media_home">
          {/* video */}

          <div className="media_home-video">
            <h3>Interview France 3</h3>
            <div className="media_home-video--container">
              <iframe
                src="https://www.youtube-nocookie.com/embed/zvLa5il8CQ4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* presse */}

          <div className="media_home-presse">
            <h3>Article de presse</h3>
            <div className="media_home-presse--img">
              <Link href="/assets/docs/david_michel.pdf">
                <a target="_blank">
                  <Image
                    src={presse}
                    width={presse.width}
                    height={presse.height}
                    alt="Logo en forme de pendule"
                    blurDataURL={presse.blurDataURL}
                    placeholder="blur"
                  />
                </a>
              </Link>
            </div>
            <p className="text-center">
              {" Document Pdf. Cliquer sur l'image pour consulter"}
            </p>
          </div>

          {/* Interview Radio  */}

          <div className="media_home-radio">
            <h3>Interview Radio</h3>

            <div className="media_home-radio--content">
              <div className="img_radio">
                <Image
                  src={radio}
                  width={radio.width}
                  height={radio.height}
                  alt="Logo fédération française de géobiologie"
                  blurDataURL={radio.blurDataURL}
                  placeholder="blur"
                />
              </div>
              <div className="media_home-radio--player">
                <figure>
                  <figcaption>Reportage David Michel</figcaption>
                  <audio
                    controls
                    src="https://firebasestorage.googleapis.com/v0/b/geobiologie-loire.appspot.com/o/interview_david_michel.mp3?alt=media&token=8f384660-ebca-458e-8dc4-e6c176ed5c1d"
                  >
                    Your browser does not support the
                    <code>audio</code> element.
                  </audio>
                </figure>
                <figure>
                  <figcaption>Recontre avec David Michel</figcaption>
                  <audio
                    controls
                    src="https://firebasestorage.googleapis.com/v0/b/geobiologie-loire.appspot.com/o/recontre_dav_dmichel.mp3?alt=media&token=356bd0af-f7ad-4ea9-98d7-44fb035db2db"
                  >
                    Your browser does not support the
                    <code>audio</code> element.
                  </audio>
                </figure>
              </div>
            </div>
          </div>
        </div>
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
