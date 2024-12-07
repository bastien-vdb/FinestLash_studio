import { Inter } from "@next/font/google";
import Corpus from "@/components/Corpus";
import Meta from "@/components/metas/Meta";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ setPayClicked }) {
  const metaTags = {
    title: "Finest Lash Studio",
    description:
      "FinestLash Studio - Votre destination pour des extensions de cils de qualité exceptionnelle. Découvrez notre expertise en matière d'extensions telles que l'effet Fox Eyes et le volume russe. Des résultats impeccables, des clientes comblées. Réservez dès maintenant et sublimez votre regard.",
    url: "https://www.finestlash.studio/",
    image: "https://www.finestlash.studio/images/banierePrestation.jpg",
  };

  useEffect(() => {
    window.location.href = "/RendezVous2";
  }, []);

  return (
    <>
      <Meta metaTags={metaTags} />

      <main className="sm:px-2 md:px-10 lg:px-16">
        {/* <Corpus setPayClicked={setPayClicked} /> */}
      </main>
    </>
  );
}
