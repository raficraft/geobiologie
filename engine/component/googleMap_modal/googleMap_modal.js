import React from "react";

import S from "./googleMap_modal.module.scss";

export default function GoogleMap_modal() {
  return (
    <>
      <div className={S.content}>
        <div className={S.map}>
          <iframe
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=800&amp;height=700&amp;hl=fr&amp;q=1440%20route%20de%20Lyon%20saint%20martin%20lestra+(David%20Michel)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>

        <div className={S.contact}>
          <h2>Adrresse et contact</h2>

          <div className={S.info}>
            <p>1440 route de Lyon</p>
            <p>42110 SAINT-MARTIN LESTRA</p>
            <p>06 . 58 . 02 . 17 . 24</p>
            <p>david.michel1988@hotmail.fr</p>
          </div>
        </div>
      </div>
    </>
  );
}
