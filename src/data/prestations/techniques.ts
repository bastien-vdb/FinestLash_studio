import type { techniquesType } from "@/types/techniques";

export const techniques: techniquesType[] = [
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
