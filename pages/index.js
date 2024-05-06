import React, { useContext, useEffect } from "react";
import Head from "next/head";

import Index_content from "./Index_content";
import List_review from "../engine/component/form/user_review/list_review/List_review";
import List_paginate, {
  Items,
} from "../engine/component/list_paginate/List_paginate";

export default function Home() {
  return (
    <>
      <Head>
        <title>David Michel. Géobiologie Isere 38</title>
        <meta
          name="description"
          content="Page d'acceuil du site de David michel géobiologue"
        />
        <meta
          name="keywords"
          content="Loire , Rhône,Isère ,Grenoble,  géobiologie, soins, menhir, pierres levées, david michel, sourcier, FFG, psychologie, psychanalyste, soins énergétique ,soins à distance, paris  Saint-Etienne, Lyon, rituel, habitat sain, diagnostique, études techniques, magnétisme, forage, puits"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mainContent">
        <section className="content">
          <Index_content></Index_content>

          <List_review></List_review>

          {/* <List_paginate paginate={{ perPage: 5 }}>
            <Items></Items>
          </List_paginate> */}
        </section>
      </main>
    </>
  );
}
