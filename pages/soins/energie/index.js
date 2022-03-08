import Head from "next/head";
import Energie_content from "./Energie_content";
import HR from "../../../engine/component/atomic/HR";
import Masonry from "../../../engine/component/masonry/Masonry";

export default function Energie() {
  return (
    <>
      <Head>
        <title>David Michel. Thérapie energétique</title>
        <meta name="description" content="My heart in my Art" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mainContent">
        <section className="content">
          <Energie_content></Energie_content>
          {/* <Masonry dir="masonry/sourcier/"></Masonry> */}
        </section>

        <HR
          css={{
            margin: "4 0",
            width: "100%",
          }}
        ></HR>

        <Masonry
          dir="masonry/soins/"
          masonry={{
            width: `1120px`,
            column: "2",
            gap: "1rem",
          }}
          horizontalPadding="2rem"
        ></Masonry>
      </main>
    </>
  );
}
