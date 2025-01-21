import { IProject } from "src/features/ProjectsPage/Projects.types";

export interface IFavoriteProjectsBarProps {
  name?: string;
  favoriteProjects?: IProject[];
}
