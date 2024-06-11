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
        title: "Thérapie Énergétique",
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
        title: "Psychanalise",
        link: "/soins/psychanalise",
      },
      {
        title: "Kinésiologie",
        link: "/soins/kinesiologie",
      },
      {
        title: "Electrosensible",
        link: "/soins/ondes",
      },
    ],
  },
  {
    title: "Menhir",
    link: "/menhir",
    icon: <StoneIcon></StoneIcon>,
  },
  {
    title: "Sourcier",
    link: "/sourcier",
    icon: <WaterOutline></WaterOutline>,
  },

  {
    title: "Stages",
    link: "/stage",
    icon: <Learn_icon></Learn_icon>,
    child: [
      {
        title: "Sourcier",
        link: "/stage/sourcier",
      },
      {
        title: "Géobiologie",
        link: "/stage/geobiologie",
      },
      {
        title: "Protection",
        link: "/stage/protection",
      },
    ],
  },
];
