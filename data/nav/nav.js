import {
  EarthAtlantic,
  EnergyIcon,
  Learn_icon,
  Newspaper,
  Psy,
  ShoppingCart_icon,
  StoneIcon,
  WaterOutline,
  AccountCircle,
} from "../../assets/icons/Icon_svg";

export const nav = [
  {
    title: "Présentation",
    link: "/presentation",
    icon: <AccountCircle></AccountCircle>,
    current: "/presentation",
  },
  {
    title: "Soins",
    link: "/soins",
    icon: <EnergyIcon></EnergyIcon>,
    child: [
      {
        title: "Thérapie Energetique",
        link: "/soins/energie",
      },
      {
        title: "Soins de dégagement",
        link: "/soins/degagement",
      },
      {
        title: "Liens transgénérationelle",
        link: "/soins/transgenerationelle",
      },
      {
        title: "psychanaliste",
        link: "/soins/psychanaliste",
      },
      {
        title: "kinesiologie",
        link: "/soins/kinesiologie",
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
];
