import { ReactNode } from "react";

export interface IProject {
  id: string;
  name: string;
  manager?: string;
  description?: string;
  startDate?: string;
  endDate?: string;
  favorite?: boolean;
}

export interface IProjectsContextProvider {
  children: ReactNode;
  projects?: IProject[];
}

export interface IProjectContext {
  projects: IProject[];
}

export type IProjectsAction = { type: "projects:update"; projects: IProject[] };
