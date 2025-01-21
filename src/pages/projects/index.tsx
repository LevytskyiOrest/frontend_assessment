import { NextPage } from "next/types";
import { JSX } from "react";
import ProjectsPage from "src/features/ProjectsPage/ProjectsPage";

function Projects(): JSX.Element {
  return <ProjectsPage />;
}

export default Projects as NextPage;
