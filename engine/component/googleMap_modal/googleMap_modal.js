import React from "react";

import S from "./googleMap_modal.module.scss";

export default function GoogleMap_modal() {
  return (
    <>
      <section className={S.wrapper}>
        <header>
          <h2>Localisation et contact téléphonique</h2>
        </header>
        <div className={S.content}>
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

          <hr className="separatorY"></hr>
          <div className={S.contact}>
            <h2>Adrresse et contact</h2>

            <p>Lorem ipsum lorem ipsum lorem ipsum</p>

            <div className={S.info}>
              <h3>1440 route de Lyon</h3>
              <h3>42110 SAINT-MARTIN LESTRA</h3>
              <h3>06 . 58 . 02 . 17 . 24</h3>
              <h3>david.michel1988@hotmail.fr</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
