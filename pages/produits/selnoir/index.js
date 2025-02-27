import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import assets0 from "../../../public/assets/img/masonry/produits/sel/sel.jpeg";

const dataProduct = {
  name: "Sel noir d'Hawaï alchimique exorcisé",
  img: [assets0,],
  description:
    "Sel noir d'Hawaï alchimique exorcisé.Il sert pour la protection des lieux et des personnes. Il est vendu dans un tube à essai scellé par de la cire d'abeille des montagnes.Nos produits sont consacrés, investis, chargés, réveillés, énergétisés et préparés selon des procédés antiques du Grand Art Alchimique.",
};

export default function Selnoir() {
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
                    height={300}
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
