import {
  EnergyIcon,
  Learn_icon,
  StoneIcon,
  WaterOutline,
  AccountCircle,
  Home_icon,
} from "../../assets/icons/Icon_svg";

export const nav = [
  {
    title: "Acceuil",
    link: "/",
    icon: <Home_icon></Home_icon>,
  },
  {
    title: "Présentation",
    link: "/presentation",
    icon: <AccountCircle></AccountCircle>,
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
        title: "Liens transgénérationels",
        link: "/soins/transgenerationel",
      },
      {
        title: "Psychanaliste",
        link: "/soins/psychanaliste",
      },
      {
        title: "Kinesiologie",
        link: "/soins/kinesiologie",
      },
      {
        title: "Electrosensible",
        link: "/soins/ondes",
      },
    ],
  },
  {
    title: "menhir",
    link: "/menhir",
    icon: <StoneIcon></StoneIcon>,
  },
  {
    title: "Sourcier",
    link: "/sourcier",
    icon: <WaterOutline></WaterOutline>,
  },

  {
    title: "Stage",
    link: "/stage",
    icon: <Learn_icon></Learn_icon>,
  },
];
