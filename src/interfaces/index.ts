import { RefObject, ReactElement } from "react";

import { Route } from "../data";
export interface DescriptionModel {
  label: string;
  text: string;
}

export interface PersonalDescriptionModel {
  description: string;
  icon: ReactElement<any, any> | string;
}

export interface SkillModel {
  name: string;
  icon: ReactElement<any, any>;
}

export interface ProjectModel {
  title: string;
  description: string;
  tags: Array<string>;
  link: string;
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
  personalDescription: Array<PersonalDescriptionModel>;
  social: { github: string; linkedin: string; email: string };
  about: {
    descriptions: Array<DescriptionModel>;
  };
  skills: Array<SkillModel>;
  projects: Array<ProjectModel>;
  careers: Array<CareerModel>;
}

export interface RouteModel {
  id: number;
  ref: RefObject<HTMLDivElement>;
  route: Route;
}
