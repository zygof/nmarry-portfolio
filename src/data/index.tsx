import React from "react";
import { FaPalette, FaReact, FaCode } from "react-icons/fa";
import { CgMonday } from "react-icons/cg";

import { DataModel, LogoProps } from "../interfaces";

export enum Route {
  INTRO = "Intro",
  ABOUT = "À propos",
  CAREERS = "Formations",
  SKILLS = "Compétences",
  PROJECTS = "Projets",
  CONTACT = "Contact",
}

const data: DataModel = {
  firstName: "Nicolas",
  lastName: "MARRY",
  title: "Développeur full-stack / Mobile",
  personalDescription: [
    {
      description: "Passionné de sport",
      icon: "🏸",
    },
    {
      description: "Situé à la Réunion",
      icon: "🇷🇪",
    },
    {
      description: "En recherche d'emploi",
      icon: "🖥️",
    },
    {
      description: "me@nmarry.fr",
      icon: "📧",
    },
  ],
  social: {
    github: "https://github.com/zygof",
    linkedin: "https://github.com/zygof",
    email: "me@nmarry.fr",
  },
  about: {
    descriptions: [
      {
        label: "pourquoi-dev",
        text: "Se réveiller chaque matin pour développer mon sens artistique est ce qui me met le plus en joie. Motivé par la satistaction du client et par le travail bien fait, je mettrai toute en oeuvre pour atteindre mes objectifs.",
      },
      {
        label: "pourquoi-moi",
        text: "Faites-moi confiance et je participerai à la croissance de l'entreprise et je saurai intégrer votre équipe d'experts. Je suis une personne engagée, passionnée par les nouvelles technologies.",
      },
      {
        label: "futur",
        text: "Mon plus grand bonheur serait de mettre tout mon expertise au profit de mon île la Réunion 😌😌",
      },
    ],
  },
  careers: [
    {
      from: new Date("2020-01-01"),
      to: new Date("2022-01-01"),
      diploma: "MASTER - Bac + 5",
      title: " Expert en Développement Mobile et IoT",
      location: "YNOV Campus (Bordeaux)",
      link: "https://ynov-bordeaux.com/mastere-developpement-mobile-iot",
    },
    {
      from: new Date("2018-01-01"),
      to: new Date("2020-01-01"),
      diploma: "RNCP NIVEAU 6 - Bac + 4",
      title: "Conception Développement d'Application",
      location: "Expernet (Le Port)",
      link: "https://expernet-campus.re/formation/cda-bac4",
    },
    {
      from: new Date("2016-01-01"),
      to: new Date("2018-01-01"),
      diploma: "BTS - Bac + 2",
      title: "Système Numérique",
      option: "Informatique et Réseau",
      location: "Lycée Roland Garros (Tampon)",
      link: "https://www.onisep.fr/Ressources/Univers-Lycee/Lycees/La-Reunion/La-Reunion/lycee-polyvalent-roland-garros/bts-systemes-numeriques-option-a-informatique-et-reseaux",
    },
    {
      from: new Date("2015-01-01"),
      diploma: "BAC",
      title: "Scientifique Science Ingénieur",
      option: "Informatique et Science du Numérique",
      location: "Lycée George Brassens (St Denis)",
      link: "https://www.onisep.fr/Ressources/Univers-Lycee/Lycees/La-Reunion/La-Reunion/section-d-enseignement-professionnel-du-lycee-georges-brassens",
    },
  ],
  skills: [
    {
      name: "Frontend",
      icon: <FaCode className="text-4xl mx-auto inline-block" />,
    },
    {
      name: "Design/UX",
      icon: <FaPalette className="text-4xl mx-auto inline-block" />,
    },
    {
      name: "ReactJS",
      icon: <FaReact className="text-4xl mx-auto inline-block" />,
    },
    {
      name: "Frontend",
      icon: <FaCode className="text-4xl mx-auto inline-block" />,
    },
    {
      name: "Design/UX",
      icon: <FaPalette className="text-4xl mx-auto inline-block" />,
    },
  ],
  projects: [
    {
      title: "React tailwind portfolio",
      description:
        "👨‍🎨 An open-source portfolio template built with React and Tailwind.",
      tags: ["template", "portfolio", "reactjs", "tailwindcss"],
      link: "https://github.com/braydentw/react-tailwind-portfolio",
    },
    {
      title: "My personal website",
      description: "⚡ My portfolio built with NextJS and TailwindCSS.",
      tags: ["website", "portfolio", "nextjs", "tailwindcss"],
      link: "https://github.com/braydentW/braydentw",
    },
  ],
};

export const Logo: React.FunctionComponent<LogoProps> = ({ onClick }) => (
  <span className="flex flex-row cursor-pointer" onClick={onClick}>
    <CgMonday className="text-5xl text-gray-90" />
    <div className="flex text-2xl font-bold ml-4 mt-2">
      <p className="text-gray-500 mr-2">{data.firstName}</p>{" "}
      <p className="text-gray-800">{data.lastName}</p>
    </div>
  </span>
);

export default data;
