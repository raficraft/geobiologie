import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import assets0 from "../../../public/assets/img/masonry/produits/condensateur/condensateur_01.jpeg";
import assets1 from "../../../public/assets/img/masonry/produits/condensateur/condensateur_02.jpeg";
import assets2 from "../../../public/assets/img/masonry/produits/condensateur/condensateur_03.jpeg";
import assets3 from "../../../public/assets/img/masonry/produits/condensateur/condensateur_04.jpeg";

const dataProduct = {
  name: "Condensateur alchimique des quatre éléments",
  img: [assets0, assets1, assets2, assets3],
  description:
    "Condensateurs alchimiques des quatre éléments. Ils sont vendus chacun dans un tube à essai scellé à la cire d'abeille de montagne. Ils servent pour tout acte magique et rééquilibrage des lieux. Nos produits sont consacrés, investis, chargés, réveillés, activés et préparés selon des procédés antiques du Grand Art Alchimique.",
};

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
