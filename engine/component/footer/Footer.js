import React from "react";

import S from "./Footer.module.scss";

import CV from "./../../../public/assets/img/illustration/carte_visite/carte_visite.jpg";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={S.wrapper}>
      <section className={S.footer}>
        <div className={S.content}>
          <div className={S.info}>
            <Image
              src={CV}
              width={CV.width}
              height={CV.height}
              alt="Logo fédération française de géobiologie"
              blurDataURL={CV.blurDataURL}
              placeholder="blur"
              onClick={(e) => {
                handleClick(e);
              }}
            />
          </div>
          <div className={S.map}>
            <iframe
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              id="gmap_canvas"
              src="https://maps.google.com/maps?width=800&amp;height=700&amp;hl=fr&amp;q=1440%20route%20de%20Lyon%20saint%20martin%20lestra+(David%20Michel)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
        <footer>
          <p>Site web réalisé par R.Parodi</p>
        </footer>
      </section>
    </footer>
  );
}
