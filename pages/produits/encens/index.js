import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import assets0 from "../../../public/assets/img/masonry/produits/encens/encens.jpg";

const dataProduct = {
  name: "Encens alchimique universel",
  img: [assets0],
  description:
    "Encens de dégagement énergétique.Encens en cône composés de bois, huiles, plantes, résine et de condensateurs fluidiques réalisés selon l'art alchimique afin d'augmenter l'efficacité du mélange. Ils sont vendus par 10. Tout nos produits sont réveillés alchimiquement et traditionnellement par une consécration. Ces cônes permettent une utilisation sans pastille charbon.Précautions d'emploi: éviter l'inhalation directe de la fumée, à utiliser dans un endroit suffisamment ventilé sur une surface résistante à la chaleur. Ne pas utiliser à proximité d'enfants, femme enceinte ou matériaux inflammables. Ne pas laisser sans surveillance."};

export default function Condensateur() {
  const [selectedImage, setSelectedImage] = useState(dataProduct.img[0]);
  const hasMultipleImages = dataProduct.img.length > 1;

  return (
    <>
      <Head>
        <title>{dataProduct.name}</title>
      </Head>
         <main className="mainContent">
              <section className="content">
                <div className="article article_home">
                  <h1>{dataProduct.name}</h1>
                  <section className="product">
                    <div className="product-gallery">
                      {hasMultipleImages && (
                        <div className="thumbnails">
                          {dataProduct.img.map((image, index) => (
                            <Image
                              key={index}
                              src={image}
                              width={50}
                              height={50}
                              alt={dataProduct.name}
                              onClick={() => setSelectedImage(image)}
                              className="thumbnail"
                            />
                          ))}
                        </div>
                      )}
                      <div className="selected-image">
                        <Image
                          src={selectedImage}
                          width={300}
                          height={selectedImage.height / (selectedImage.width / 300)}
                          alt={dataProduct.name}
                        />
                      </div>
                    </div>
                    <div className="product-description">
                      <p>{dataProduct.description}</p>
                    </div>
                  </section>
                </div>
              </section>
            </main>
    </>
  );
}
