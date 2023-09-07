import type { menuType } from "@/types/menu";

export const menu: menuType[] = [
  { title: "Accueil", link: "/" },
  { title: "Prestations", link: "/PrestationsPage" },
  { title: "Formations", link: "/Formations" }, //A activer ou désactiver si pas de campagne de formation
  { title: "Rendez-vous", link: "/RendezVous", preload: "preload" },
  { title: "Contact", link: "/Contact" },
];
