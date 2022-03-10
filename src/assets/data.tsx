import React from "react";
import { FaPalette, FaReact, FaCode } from "react-icons/fa";
import { DataModel } from "../models";

const BOOTSTRAP_FOR_SKILL_ICON: string = "text-4xl mx-auto inline-block";
const data: DataModel = {
  firstName: "Nicolas",
  lastName: "MARRY",
  title: "Développeur full-stack / Mobile",
  social: {
    github: "https://github.com/zygof",
    dribbble: "https://github.com/zygof",
    twitter: "https://github.com/zygof",
    email: "someone@example.com",
  },
  about: {
    descriptions: [
      {
        label: "Développeur ? Pourquoi ?",
        text: "Se réveiller chaque matin pour développer mon sens artistique est ce qui me met le plus en joie. Motivé par la satistaction du client et par le travail bien fait, je mettrai toute en oeuvre pour atteindre mes objectifs.",
      },
      {
        label: "Pourquoi moi ?",
        text: "Faites-moi confiance et je participerai à la croissance de l'entreprise et je saurai intégrer votre équipe d'experts. Je suis une personne engagée, passionnée par les nouvelles technologies.",
      },
      {
        label: "Le futur ?",
        text: "Mon plus grand bonheur serait de mettre tout mon expertise au profit de mon île la Réunion 😌😌",
      },
    ],
  },
  skills: [
    {
      name: "Frontend",
      icon: <FaCode className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      name: "Design/UX",
      icon: <FaPalette className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      name: "ReactJS",
      icon: <FaReact className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      name: "Frontend",
      icon: <FaCode className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      name: "Design/UX",
      icon: <FaPalette className={BOOTSTRAP_FOR_SKILL_ICON} />,
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
  careers: [
    {
      from: new Date("2018-01-01"),
      to: new Date("2020-01-01"),
      diploma: "Bac + 4",
      title: "Conception Développement d'Application",
      location: "Expernet Réunion",
    },
    {
      from: new Date("2016-01-01"),
      to: new Date("2018-01-01"),
      diploma: "Bac + 2",
      title: "BTS Système Numérique",
      option: "Informatique et Réseau",
      location: "Lycée Roland Garros",
    },
    {
      from: new Date("2015-01-01"),
      diploma: "BAC",
      title: "Scientifique Science Ingénieur",
      option: "Informatique et Science du Numérique",
      location: "Lycée George Brassens",
    },
  ],
};
export default data;
