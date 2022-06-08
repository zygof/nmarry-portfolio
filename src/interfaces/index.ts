import { ReactElement } from "react";
import { IconBaseProps } from "react-icons";

import { Route } from "../data";
export interface DescriptionModel {
  label: string;
  text: string;
}

export interface PersonalDescriptionModel {
  description: string;
  icon: (props?: IconBaseProps) => ReactElement<IconBaseProps, any> | string;
  hasLink?: string;
}

export interface SocialModel {
  social: string;
  link: string;
  icon: ReactElement<any, any>;
}

export interface SkillElementModel {
  name: string;
  icon: (props?: IconBaseProps) => ReactElement<IconBaseProps, any>;
}
export interface SkillModel {
  type: string;
  elements: Array<SkillElementModel>;
}

export enum Statut {
  TEST = "EN TEST",
  IN_PROGRESS = "EN COURS",
  DONED = "TERMINÉ",
  DEPLOYED = "DÉPLOYÉE",
}

export enum Platform {
  WEB = "WEB",
  ANDROID = "ANDROID",
  IOS = "IOS",
  DESKTOP = "DESKTOP",
  ARDUINO = "ARDUINO",
}
export enum ProjectType {
  PRO = "PRO",
  SCHOOL = "SCHOOL",
  PERSONAL = "PERSO",
}
export interface ProjectModel {
  name: string;
  statut: Statut;
  type: ProjectType;
  platforms: Array<Platform>;
  description: string;
  synopsis?: string;
  technologies: Array<string>;
}

export interface ProjectCardProps {
  project: ProjectModel;
  isDarkMode?: boolean;
}
export interface CareerModel {
  title: string;
  diploma: string;
  option?: string;
  location: string;
  link?: string;
  from: Date;
  to?: Date;
}

export interface DataModel {
  firstName: string;
  lastName: string;
  title: string;
  profile: string;
  cv?: string;
  personalDescription: Array<PersonalDescriptionModel>;
  socials: Array<SocialModel>;
  about: {
    descriptions: Array<DescriptionModel>;
  };
  skills: Array<SkillModel>;
  projects: Array<ProjectModel>;
  careers: Array<CareerModel>;
}

export interface LogoProps {
  className?: string;
  isDarkMode?: boolean;
  onClick?: () => void;
}

export interface RouteModel {
  id: number;
  route: Route;
}

export interface RouteContextInterface {
  routes: Array<RouteModel>;
  handleRoutes: (routes: Array<RouteModel>) => void;
  prevRoute: RouteModel | null;
  currentRoute: RouteModel | null;
  nextRoute: RouteModel | null;
  handleRoute: (page: number) => void;
  goToPrevRoute: () => void;
  goToNextRoute: () => void;
}
