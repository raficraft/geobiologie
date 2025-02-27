import React, { useContext } from "react";
import Head from "next/head";
import encens from "../../public/assets/img/masonry/produits/mini/encens.jpg";
import bougie from "../../public/assets/img/masonry/produits/mini/bougie.jpg";
import condensateur from "../../public/assets/img/masonry/produits/mini/condensateur.jpg";
import sel from "../../public/assets/img/masonry/produits/mini/sel.jpg";
import Image from "next/image";

export default function Produits() {
  return (
    <>
      <Head>
        <title>
          Pose de Menhir et Pierres Levées - Harmonisation Énergétique
        </title>
        <meta
          name="description"
          content="Découvrez la pose de menhirs et de pierres levées avec David Michel, expert en géobiologie et harmonisation énergétique, pour revitaliser et équilibrer les espaces."
        />
        <meta
          name="keywords"
          content="pose de menhir,pose de menhir Loire, pose de mehnir Isère, pose de menhir Rhône pierres levées, harmonisation énergétique, David Michel, géobiologie, géo-poncture, énergies telluriques, énergies cosmiques, dynamisation des terrains, rééquilibrage énergétique, protection ondes négatives, amélioration productivité agricole, évaluation énergétique, activation énergétique, Rhône-Alpes, Isère, Loire, Grenoble, Lyon, Saint-Etienne"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mainContent">
        <section className="content">
          <div className="article article_home">
            <h1>Produits</h1>


            <section className="mini_product">
              {[
                { src: encens, name: "Encens Alchimique universel", price: "25,00€",link:"./produits/encens" },
                { src: sel, name: "Sel noir d'Hawaï alchimique exorcisé", price: "20,00€",link:"./produits/selnoir" },
                { src: condensateur, name: "Condensateur alchimique des quatre éléments", price: "60,00€",link:"./produits/condensateur" },
                { src: bougie, name: "Bougie Rituel Ancestral aux herbes alchimiques", price: "100,00€",link:"./produits/bougie" },
              ].map((product, index) => (
                <a href={product.link} key={index} style={{ flex: '1', textDecoration: 'none', color: 'inherit' }}>
                  <article className="link_product">
                    <div className="img_product">
                      <Image
                        src={product.src}
                        width={product.src.width}
                        height={product.src.height}
                        alt="src en forme de pendule"
                        blurDataURL={product.src.blurDataURL}
                        placeholder="blur"
                      />
                    </div>
                    <div className="info_product">
                      <p className="name_product">{product.name}</p>
                      {/* <p className="price_product">{product.price}</p> */}
                    </div>
                  </article>
                </a>
              ))}
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
