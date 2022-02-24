import {
  EarthAtlantic,
  EnergyIcon,
  Learn_icon,
  Newspaper,
  Psy,
  ShoppingCart_icon,
  StoneIcon,
  WaterOutline,
} from "../../assets/icons/Icon_svg";

export const nav = [
  {
    title: "Présentation",
    link: "/presentation",
    icon: <EarthAtlantic></EarthAtlantic>,
  },
  {
    title: "Soins",
    link: "/",
    icon: <EnergyIcon></EnergyIcon>,
    child: [
      {
        title: "Thérapie Energetique",
        link: "/soins/energie",
      },
      {
        title: "soins de dégagement",
        link: "/",
      },
      {
        title: "liens transgénérationelle",
        link: "/",
      },
      {
        title: "psychanaliste",
        link: "/",
      },
    ],
  },
  {
    title: "menhir",
    link: "/menhir",
    icon: <StoneIcon></StoneIcon>,
  },
  {
    title: "sourcier",
    link: "/sourcier",
    icon: <WaterOutline></WaterOutline>,
  },

  {
    title: "stage",
    link: "/stage",
    icon: <Learn_icon></Learn_icon>,
  },

  {
    title: "vente",
    link: "/vente",
    icon: <ShoppingCart_icon></ShoppingCart_icon>,
  },
];
