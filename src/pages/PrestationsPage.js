import { useEffect } from "react";
import Techniques from "../components/Techniques";
import { aosAnimationConfig } from "@/components/utils/AosAnimationConfig";
import AOS from "aos";
import "aos/dist/aos.css";

const techniques = [
  {
    title: "POSE CIL À CIL",
    descr: "La pose cil à cil est une technique consistant à coller une extension unique sur un cil naturel. Ce type de pose est celui ayant l’effet le plus naturel. Le studio utilise différentes épaisseurs et choisira celle la plus adaptée à vos cils naturels ainsi qu’au rendu souhaité.",
    img: "/images/vignettes/vignette1.jpeg",
    price: 70,
    link: "/RendezVous",
  },
  {
    title: "POSE MIXTE",
    descr: "La pose mixte est un mélange entre la pose cil à cil et la pose volume russe. Il y aura donc des extensions uniques, combinées avec des bouquets de plusieurs cils, pour celles qui veulent un résultat un peu plus fourni. ",
    img: "/images/vignettes/vignette3.jpeg",
    price: 80,
    link: "/RendezVous",
  },
  {
    title: "POSE VOLUME",
    descr:
      "Le volume est une technique consistant à poser un bouquet de cils sur un cil naturel. Bien entendu, l’épaisseur des cils utilisés en volume sont bien plus fins et légers afin que le poids bouquet n’endommage pas le cil naturel. Le bouquet peut contenir  2 extensions comme il peut en contenir 4 et au delà. Plus le bouquet est chargé, plus le volume est intense.",
    img: "/images/vignettes/vignette2.jpeg",
    price: 90,
    link: "/RendezVous",
    complements: {
      title1: "la pose volume est à 90€",
      title2: "Le volume intense à 100€",
      title3: "Le volume effet fox eyes à 100€.",
    },
  },
];

export const getServerSideProps = async () => {
  const res = await fetch(`https://dzt.pgb.mybluehost.me/wp-json/wp/v2/pages/66`);
  const repo = await res.json();
  return { props: { repo } };
};

function PrestationsPage({ setPayClicked, repo }) {

    const prestations_title = "prestations_title";
    const prestations_content = "prestations_content";
    const prestations_price = "prestations_price";
    const main_content = "main_content";
    const prestaTitles = repo.content.rendered.match(new RegExp(`<h2[^>]*?id="${prestations_title}"[^>]*?>(.*?)<\/h2>`, "gi")).map(match => match.replace(/<[^>]+>/g, ""));
    const prestaContent = repo.content.rendered.match(new RegExp(`<p[^>]*?id="${prestations_content}"[^>]*?>(.*?)<\/p>`, "gi")).map(match => match.replace(/<[^>]+>/g, ""));
    const prestaPrice = repo.content.rendered.match(new RegExp(`<p[^>]*?id="${prestations_price}"[^>]*?>(.*?)<\/p>`, "gi")).map(match => match.replace(/<[^>]+>/g, ""));
    const prestaMainContent = repo.content.rendered.match(new RegExp(`<p[^>]*?id="${main_content}"[^>]*?>(.*?)<\/p>`, "i"));

    const presta = [
        {
            title: prestaTitles[0],
            content: prestaContent[0],
            price: prestaPrice[0],
        },
        {
            title: prestaTitles[1],
            content: prestaContent[1],
            price: prestaPrice[1],
        },
        {
            title: prestaTitles[2],
            content: prestaContent[2],
            price: prestaPrice[2],
        },
    ];
    

  useEffect(() => {
    AOS.init(aosAnimationConfig);
    console.log('cpntent', prestaTitles);
  }, []);

  return (
    <>
      <div className="cursor-pointer rounded-xl relative group shadow-xl">
        <div className="bannierePrestation w-full pt-16 pb-24 text-center">
          <h4 className="text-4xl font-bold text-gray-800">{repo.title.rendered}</h4>
          <p className="text-sm md:text-base text-gray-800 mt-6 text-justify lg:text-center mx-6 sm:mx-12 md:mx-40 lg:mx-96  ">
            <div dangerouslySetInnerHTML={{ __html: prestaMainContent[1] }}></div>
          </p>
        </div>

        <div data-aos="zoom-in" className="w-full 2xl:w-3/4 flex items-center justify-center px-8 md:px-32 lg:px-16 2xl:px-0 mx-auto -mt-8">
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* {techniques.map((e, key) => {
              return <Techniques setPayClicked={setPayClicked} {...e} key={key} />;
            })} */}
            {presta.map((e, key) => {
              return <Techniques presta={presta} setPayClicked={setPayClicked} {...e} key={key} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default PrestationsPage;
