import { ReactElement } from "react";

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
  from: Date;
  to?: Date;
}

export interface DataModel {
  firstName: string;
  lastName: string;
  title: string;
  personalDescription: Array<PersonalDescriptionModel>;
  social: { github: string; dribbble: string; twitter: string; email: string };
  about: {
    descriptions: Array<DescriptionModel>;
  };
  skills: Array<SkillModel>;
  projects: Array<ProjectModel>;
  careers: Array<CareerModel>;
}
