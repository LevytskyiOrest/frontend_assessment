import { Dispatch, JSX, createContext, useContext, useReducer } from "react";

import {
  IProject,
  IProjectContext,
  IProjectsAction,
  IProjectsContextProvider,
} from "./Projects.types";

export const ProjectsContext = createContext<IProjectContext>(null);
export const ProjectDispatchContext = createContext<Dispatch<IProjectsAction>>(null);

export function useProjectsContext(): IProjectContext {
  return useContext(ProjectsContext);
}

export function useProjectsDispatch(): Dispatch<IProjectsAction> {
  return useContext(ProjectDispatchContext);
}

export function getProjectsFromStorage(): IProject[] {
  try {
    const projectsData = JSON.parse(window.sessionStorage.getItem("projects")) as IProject[];
    return projectsData;
  } catch (error) {
    console.log({ error });
    return null;
  }
}

export function setProjectsInStorage(projects: IProject[]): void {
  try {
    window.sessionStorage.setItem("projects", JSON.stringify(projects));
  } catch (error) {
    console.log({ error });
  }
}

export function ProjectsProvider({ children, projects }: IProjectsContextProvider): JSX.Element {
  const initialProjects: IProject[] = projects || [];

  const [projectsContext, dispatch] = useReducer(projectsReducer, {
    projects: initialProjects,
  });

  return (
    <ProjectsContext.Provider value={projectsContext}>
      <ProjectDispatchContext.Provider value={dispatch}>{children}</ProjectDispatchContext.Provider>
    </ProjectsContext.Provider>
  );
}

function projectsReducer(projects: IProjectContext, action: IProjectsAction): IProjectContext {
  switch (action.type) {
    case "projects:update":
      setProjectsInStorage(action.projects);

      return {
        projects: action.projects,
      };
    default:
      return projects;
  }
}
