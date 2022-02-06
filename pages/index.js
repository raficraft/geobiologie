import Head from "next/head";
import Link from "next/link";
import { useContext } from "react";
import Heroes from "../engine/component/Heroes/Heroes";
import { AuthContext } from "../engine/context/auth/AuthProvider";
import { LanguageContext } from "../engine/context/language/LanguageContext";

export default function Home() {
  const { lang } = useContext(LanguageContext);
  const { validAuth, currentUser } = useContext(AuthContext);

  /*** */

  return (
    <>
      <Head>
        <title>David Michel. Géobiologie Loire 42</title>
        <meta name="description" content="My heart in my Art" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mainContent">
        <Heroes title="lol"></Heroes>
        <section className="content">
          <h1>NEXT.JS Laboratory hosting with vercel app</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet
            consectetur justo. Nunc vitae sollicitudin turpis. Pellentesque
            purus eros, mattis at rutrum et, blandit at mi. Cras at libero quis
            dui varius faucibus id sed lacus. Vivamus viverra mi quis leo
            vulputate ornare. Praesent nec scelerisque ante. Suspendisse
            potenti. Donec ut eros congue, sollicitudin dolor et, pulvinar
            felis. Phasellus at quam ac tortor vestibulum consequat. Nam quis
            est in odio accumsan cursus. Vivamus tincidunt varius augue, sed
            blandit ipsum suscipit in. Integer blandit leo ligula, ut aliquet
            est egestas quis. Nunc mi lacus, porta vitae eleifend vel,
            scelerisque at turpis. Fusce sagittis elementum faucibus. Mauris
            eget pellentesque risus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet
            consectetur justo. Nunc vitae sollicitudin turpis. Pellentesque
            purus eros, mattis at rutrum et, blandit at mi. Cras at libero quis
            dui varius faucibus id sed lacus. Vivamus viverra mi quis leo
            vulputate ornare. Praesent nec scelerisque ante. Suspendisse
            potenti. Donec ut eros congue, sollicitudin dolor et, pulvinar
            felis. Phasellus at quam ac tortor vestibulum consequat. Nam quis
            est in odio accumsan cursus. Vivamus tincidunt varius augue, sed
            blandit ipsum suscipit in. Integer blandit leo ligula, ut aliquet
            est egestas quis. Nunc mi lacus, porta vitae eleifend vel,
            scelerisque at turpis. Fusce sagittis elementum faucibus. Mauris
            eget pellentesque risus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet
            consectetur justo. Nunc vitae sollicitudin turpis. Pellentesque
            purus eros, mattis at rutrum et, blandit at mi. Cras at libero quis
            dui varius faucibus id sed lacus. Vivamus viverra mi quis leo
            vulputate ornare. Praesent nec scelerisque ante. Suspendisse
            potenti. Donec ut eros congue, sollicitudin dolor et, pulvinar
            felis. Phasellus at quam ac tortor vestibulum consequat. Nam quis
            est in odio accumsan cursus. Vivamus tincidunt varius augue, sed
            blandit ipsum suscipit in. Integer blandit leo ligula, ut aliquet
            est egestas quis. Nunc mi lacus, porta vitae eleifend vel,
            scelerisque at turpis. Fusce sagittis elementum faucibus. Mauris
            eget pellentesque risus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet
            consectetur justo. Nunc vitae sollicitudin turpis. Pellentesque
            purus eros, mattis at rutrum et, blandit at mi. Cras at libero quis
            dui varius faucibus id sed lacus. Vivamus viverra mi quis leo
            vulputate ornare. Praesent nec scelerisque ante. Suspendisse
            potenti. Donec ut eros congue, sollicitudin dolor et, pulvinar
            felis. Phasellus at quam ac tortor vestibulum consequat. Nam quis
            est in odio accumsan cursus. Vivamus tincidunt varius augue, sed
            blandit ipsum suscipit in. Integer blandit leo ligula, ut aliquet
            est egestas quis. Nunc mi lacus, porta vitae eleifend vel,
            scelerisque at turpis. Fusce sagittis elementum faucibus. Mauris
            eget pellentesque risus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet
            consectetur justo. Nunc vitae sollicitudin turpis. Pellentesque
            purus eros, mattis at rutrum et, blandit at mi. Cras at libero quis
            dui varius faucibus id sed lacus. Vivamus viverra mi quis leo
            vulputate ornare. Praesent nec scelerisque ante. Suspendisse
            potenti. Donec ut eros congue, sollicitudin dolor et, pulvinar
            felis. Phasellus at quam ac tortor vestibulum consequat. Nam quis
            est in odio accumsan cursus. Vivamus tincidunt varius augue, sed
            blandit ipsum suscipit in. Integer blandit leo ligula, ut aliquet
            est egestas quis. Nunc mi lacus, porta vitae eleifend vel,
            scelerisque at turpis. Fusce sagittis elementum faucibus. Mauris
            eget pellentesque risus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet
            consectetur justo. Nunc vitae sollicitudin turpis. Pellentesque
            purus eros, mattis at rutrum et, blandit at mi. Cras at libero quis
            dui varius faucibus id sed lacus. Vivamus viverra mi quis leo
            vulputate ornare. Praesent nec scelerisque ante. Suspendisse
            potenti. Donec ut eros congue, sollicitudin dolor et, pulvinar
            felis. Phasellus at quam ac tortor vestibulum consequat. Nam quis
            est in odio accumsan cursus. Vivamus tincidunt varius augue, sed
            blandit ipsum suscipit in. Integer blandit leo ligula, ut aliquet
            est egestas quis. Nunc mi lacus, porta vitae eleifend vel,
            scelerisque at turpis. Fusce sagittis elementum faucibus. Mauris
            eget pellentesque risus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet
            consectetur justo. Nunc vitae sollicitudin turpis. Pellentesque
            purus eros, mattis at rutrum et, blandit at mi. Cras at libero quis
            dui varius faucibus id sed lacus. Vivamus viverra mi quis leo
            vulputate ornare. Praesent nec scelerisque ante. Suspendisse
            potenti. Donec ut eros congue, sollicitudin dolor et, pulvinar
            felis. Phasellus at quam ac tortor vestibulum consequat. Nam quis
            est in odio accumsan cursus. Vivamus tincidunt varius augue, sed
            blandit ipsum suscipit in. Integer blandit leo ligula, ut aliquet
            est egestas quis. Nunc mi lacus, porta vitae eleifend vel,
            scelerisque at turpis. Fusce sagittis elementum faucibus. Mauris
            eget pellentesque risus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet
            consectetur justo. Nunc vitae sollicitudin turpis. Pellentesque
            purus eros, mattis at rutrum et, blandit at mi. Cras at libero quis
            dui varius faucibus id sed lacus. Vivamus viverra mi quis leo
            vulputate ornare. Praesent nec scelerisque ante. Suspendisse
            potenti. Donec ut eros congue, sollicitudin dolor et, pulvinar
            felis. Phasellus at quam ac tortor vestibulum consequat. Nam quis
            est in odio accumsan cursus. Vivamus tincidunt varius augue, sed
            blandit ipsum suscipit in. Integer blandit leo ligula, ut aliquet
            est egestas quis. Nunc mi lacus, porta vitae eleifend vel,
            scelerisque at turpis. Fusce sagittis elementum faucibus. Mauris
            eget pellentesque risus.
          </p>

          <h1>{lang && lang}</h1>
          {validAuth && currentUser && (
            <Link href="/admin">
              <a className="oldLink">
                <h1>Go to dashBoard</h1>
              </a>
            </Link>
          )}

          {validAuth && (
            <h1>
              {!validAuth.isAuth && validAuth.role === 0 && lang === "FR"
                ? "Bonjour visiteurs, vous n'êtes pas connecter"
                : validAuth.isAuth && validAuth.role === 0 && lang === "FR"
                ? `Bonjour ${currentUser?.email}`
                : null}

              {!validAuth.isAuth && validAuth.role === 0 && lang === "EN"
                ? "Hello Guest , you are not connected"
                : validAuth.isAuth && validAuth.role === 0 && lang === "EN"
                ? `Hello ${currentUser?.email}`
                : null}
            </h1>
          )}
        </section>
      </main>
    </>
  );
}
