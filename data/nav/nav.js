import {
  EarthAtlantic,
  EnergyIcon,
  Newspaper,
  StoneIcon,
  WaterOutline,
} from "../../assets/icons/Icon_svg";

export const nav = [
  {
    title: "Géobiologie",
    link: "/",
    icon: <EarthAtlantic></EarthAtlantic>,
  },
  {
    title: "magnétisme",
    link: "/",
    icon: <EnergyIcon></EnergyIcon>,
    child: [
      {
        title: "diagnositque",
        link: "/",
      },
      {
        title: "soins",
        link: "/",
      },
      {
        title: "harmonie",
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
    title: "presse",
    link: "/presse",
    icon: <Newspaper></Newspaper>,
  },
];
