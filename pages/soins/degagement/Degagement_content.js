import React from "react";
import Image from "next/image";
import embed from "../../../public/assets/img/masonry/soins/degagement/degagement.jpg";
import Head from "next/head";

export default function PresentationContent() {
  return (
    <article className="article article_home">
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
        <h2>Découvrez le soin de dégagement de David Michel</h2>
        <h3>Qu'est-ce qu'un soin de dégagement ?</h3>
        <p>
          Le soin de dégagement est une pratique énergétique puissante visant à
          libérer une personne des influences négatives qui peuvent perturber
          son bien-être physique, émotionnel et spirituel. Cela inclut
          l'élimination des entités négatives, de la magie noire, des
          envoûtements, des anathèmes, des malédictions, et des sorts. Nos
          techniques de dégagement énergétique sont également efficaces pour des
          processus d'exorcisme doux, permettant une purification profonde de
          votre être.
        </p>
      </section>

      <section>
        <h2>Quand avoir recours à un soin de dégagement ?</h2>
        <p>
          Il est recommandé de considérer un soin de dégagement si vous vivez
          des situations telles que :
        </p>
        <ul>
          <li>
            <h3>Fatigue Persistante</h3>
            <p>
              Vous ressentez une fatigue inexplicable malgré un repos suffisant.
            </p>
          </li>
          <li>
            <h3>Irritabilité et Changements d'humeur</h3>
            <p>
              Vous devenez facilement irritable ou constatez des changements
              d'humeur soudains et inexpliqués.
            </p>
          </li>
          <li>
            <h3>Perte de Soi</h3>
            <p>
              Vous avez l'impression de ne plus être vous-même, comme si quelque
              chose perturbait votre véritable essence.
            </p>
          </li>
          <li>
            <h3>Situations Négatives Répétitives</h3>
            <p>
              Vous faites face à des situations complexes ou négatives qui se
              répètent sans raison apparente.
            </p>
          </li>
        </ul>
      </section>

      <section>
        <h2>Les Bienfaits d'un Soin de Dégagement</h2>
        <p>Un soin de dégagement permet de :</p>
        <ul>
          <li>
            <h3>Éliminer les Entités Négatives</h3>
            <p>
              Nous débarrassons votre aura et votre espace personnel des entités
              négatives qui peuvent drainer votre énergie.
            </p>
          </li>
          <li>
            <h3>Neutraliser les Magies Noires et Envoûtements</h3>
            <p>
              Nos techniques spécifiques permettent de neutraliser les effets de
              la magie noire, des envoûtements et des malédictions.
            </p>
          </li>
          <li>
            <h3>Rétablir l'Équilibre Énergétique</h3>
            <p>
              Nous rétablissons l'équilibre énergétique de votre corps et de
              votre esprit, vous aidant à retrouver votre pleine vitalité.
            </p>
          </li>
          <li>
            <h3>Protéger votre Aura</h3>
            <p>
              Nous mettons en place des protections énergétiques pour prévenir
              de futures attaques ou influences négatives.
            </p>
          </li>
        </ul>
      </section>

      <section>
        <h2>Comment se déroule un soin de dégagement ?</h2>
        <p>
          Lors d'un soin de dégagement, nous utilisons diverses méthodes
          énergétiques, y compris l'utilisation de pendules, de cristaux, et de
          rituels spécifiques. Chaque séance est adaptée à la situation unique
          de chaque individu, garantissant ainsi une purification et une
          libération profondes.
        </p>
      </section>

      <section>
        <h2>Pourquoi choisir David Michel pour vos soins de dégagement ?</h2>
        <ul>
          <li>
            <h3>Expertise Professionnelle</h3>
            <p>
              Avec 10 années d'expérience, nous avons aidé de nombreuses
              personnes à se libérer des influences négatives et à retrouver une
              vie harmonieuse.
            </p>
          </li>
          <li>
            <h3>Approche Personnalisée</h3>
            <p>
              Chaque soin est personnalisé en fonction des besoins et des
              situations spécifiques de nos clients.
            </p>
          </li>
          <li>
            <h3>Espace de Soin Énergétique</h3>
            <p>
              Notre zome énergétique est un lieu spécialement conçu pour
              maximiser les effets de purification et de dégagement énergétique.
            </p>
          </li>
        </ul>
      </section>

      <section>
        <h2>Contactez-nous pour un Soin de Dégagement Personnalisé</h2>
        <p>
          Si vous ressentez le besoin de vous libérer des influences négatives
          et de retrouver un état de bien-être et de sérénité, n'hésitez pas à
          nous contacter pour une consultation. Nous sommes là pour vous
          accompagner dans votre chemin vers une vie harmonieuse et
          énergétiquement équilibrée.
        </p>
      </section>
    </article>
  );
}
