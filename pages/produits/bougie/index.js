import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import assets0 from "../../../public/assets/img/masonry/produits/bougie/bougie01.jpeg";
import assets1 from "../../../public/assets/img/masonry/produits/bougie/bougie02.jpeg";

const dataProduct = {
  name: "Bougie Rituel Ancestral aux herbes alchimiques",
  img: [assets0, assets1],
  description:
    "Grosse bougie de 7 par 30 cm enrobée d'herbes, préparée selon des procédés alchimiques anciens issus de la véritable tradition.Elle est a utilisé pour des rituels ancestraux: demande, prières, dévotion.../nLe rituel et les prières sont envoyées avec la bougie.",
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
