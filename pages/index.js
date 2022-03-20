import React, { useContext, useEffect } from "react";
import Head from "next/head";

import Index_content from "./Index_content";
import List_review from "../engine/component/form/user_review/list_review/List_review";
import List_paginate, {
  Items,
} from "../engine/component/list_paginate/List_paginate";

import useFirestore from "../engine/hooks/firestore/useFirestore";

export default function Home() {
  return (
    <>
      <Head>
        <title>David Michel. Géobiologie Loire 42</title>
        <meta name="description" content="My heart in my Art" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mainContent">
        <section className="content">
          <Index_content></Index_content>

          <List_review></List_review>
          <List_paginate paginate={{ perPage: 5 }}>
            <Items></Items>
          </List_paginate>
        </section>
      </main>
    </>
  );
}
