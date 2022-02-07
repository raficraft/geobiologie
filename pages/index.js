import Head from "next/head";
import User_review from "../engine/component/form/user_review/User_review";
import Heroes from "../engine/component/Heroes/Heroes";

export default function Home() {
  /*** */

  return (
    <>
      <Head>
        <title>David Michel. Géobiologie Loire 42</title>
        <meta name="description" content="My heart in my Art" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mainContent">
        <Heroes></Heroes>
        <section className="content">
          <User_review></User_review>
        </section>
      </main>
    </>
  );
}
