import React from "react";
import Image from "next/image";
import embed from "../../../public/assets/img/masonry/soins/trans/transgenerationelle.jpg";

export default function Trans_content() {
  return (
    <>
      <article className="article article_home">
        <header>
          <h2>Liens transgénerationelle</h2>
        </header>

        <div className={`embed_image embed_image--portrait`}>
          <Image
            src={embed}
            width={embed.width}
            height={embed.height}
            alt="Logo en forme de pendule"
            blurDataURL={embed.blurDataURL}
            placeholder="blur"
          />
        </div>

        <p>
          Elle est semblable à la méthode des constellations familiales qui est
          une thérapie familiale transgénérationnelle.
        </p>
        <p>
          En effet, l&rsquo;analyse transgénérationnelle se base sur
          l&rsquo;idée que nous pouvons être victimes de problèmes familiaux
          antérieurs, datant même de plusieurs générations. Nous serions donc
          porteurs de l&rsquo;héritage de notre famille, et ce dans tous les
          aspects. (migrations, guerres, blessures, fausses couches).
        </p>
        <p>
          En d&rsquo;autres termes, un thérapeute transgénérationnel
          s&rsquo;appuie sur l&rsquo;arbre généalogique de son sujet pour
          identifier d La traversée d&rsquo;éventuels traumas. La traversée
          d&rsquo;analyse transgénérationnelle est une approche intéressante
          pour se libérer des chocs amassés sur plusieurs générations.
        </p>
        <p>
          Selon les principes de cette discipline, la diffusion des traumas
          familiaux peut se faire de deux manières. Quand la transmission des
          blessures se fait explicitement entre des générations qui se
          connaissent, on parle d&rsquo;intergénérationnel. A l&rsquo;inverse,
          le transgénérationnel intervient lorsque cette transmission se fait
          entre générations distantes dans le temps.
        </p>
        <p>
          Certaines blessures, trop anciennes ou trop douloureuses, deviennent
          des secrets, des non-dits ou des sujets tabous. Ces mystères
          continuent de vivre en nous sous la forme de normes familiales, de
          règles et de principes que l&rsquo;on s'impose et qui viennent
          perturber notre équilibre.
        </p>
      </article>
    </>
  );
}
