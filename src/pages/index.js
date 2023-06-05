import Head from "next/head";
import { Inter } from "@next/font/google";
import Corpus from "@/components/Corpus";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ setPayClicked }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>Finest Lash Studio</title>
        <meta
          name="description"
          content="FinestLash Studio - Votre destination pour des extensions de cils de qualité exceptionnelle. Découvrez notre expertise en matière d'extensions telles que l'effet Fox Eyes et le volume russe. Des résultats impeccables, des clientes comblées. Réservez dès maintenant et sublimez votre regard."
        />

        <meta property="og:url" content="https://www.finestlash.studio/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Finest Lash Studio" />
        <meta
          property="og:description"
          content="FinestLash Studio - Votre destination pour des extensions de cils de qualité exceptionnelle. Découvrez notre expertise en matière d'extensions telles que l'effet fox eyes et le volume russe. Des résultats impeccables, des clientes comblées. Réservez dès maintenant et sublimez votre regard."
        />
        <meta property="og:image" content="https://www.finestlash.studio/images/banierePrestation.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="finestlash.studio" />
        <meta property="twitter:url" content="https://www.finestlash.studio/" />
        <meta name="twitter:title" content="Finest Lash Studio" />
        <meta
          name="twitter:description"
          content="FinestLash Studio - Votre destination pour des extensions de cils de qualité exceptionnelle. Découvrez notre expertise en matière d'extensions telles que l'effet fox eyes et le volume russe. Des résultats impeccables, des clientes comblées. Réservez dès maintenant et sublimez votre regard."
        />
        <meta name="twitter:image" content="https://www.finestlash.studio/images/banierePrestation.jpg" />
      </Head>

      <main className="sm:px-2 md:px-10 lg:px-16">
        <Corpus setPayClicked={setPayClicked} />
      </main>
    </>
  );
}
