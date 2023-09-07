import React from "react";
import Head from "next/head";

type MetaProps = {
  title?: string,
  description?: string,
  url?: string,
  image?: string
}

function Meta(
  {
    title = "Finest Lash Studio",
    description = "FinestLash Studio - Votre destination pour des extensions de cils de qualité exceptionnelle. Découvrez notre expertise en matière d'extensions telles que l'effet Fox Eyes et le volume russe. Des résultats impeccables, des clientes comblées. Réservez dès maintenant et sublimez votre regard.",
    url = "https://www.finestlash.studio/",
    image = "https://www.finestlash.studio/images/banierePrestation.jpg",
  }:
    MetaProps) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="finestlash.studio" />
      <meta property="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}

export default Meta;
