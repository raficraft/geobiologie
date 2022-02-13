import {
  EarthAtlantic,
  EnergyIcon,
  Newspaper,
  Psy,
  StoneIcon,
  WaterOutline,
} from "../../assets/icons/Icon_svg";

export const nav = [
  {
    title: "Géobiologie",
    link: "/geobiologie",
    icon: <EarthAtlantic></EarthAtlantic>,
  },
  {
    title: "Soins",
    link: "/",
    icon: <EnergyIcon></EnergyIcon>,
    child: [
      {
        title: "Thérapie Energetique",
        link: "/",
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
    link: "/",
    icon: <StoneIcon></StoneIcon>,
    child: [
      {
        title: "diagnositque",
        link: "/",
      },
    ],
  },
  {
    title: "sourcier",
    link: "/",
    icon: <WaterOutline></WaterOutline>,
  },

  {
    title: "stage",
    link: "/",
    icon: <WaterOutline></WaterOutline>,
  },
  {
    title: "presse",
    link: "/presse",
    icon: <Newspaper></Newspaper>,
  },
];
