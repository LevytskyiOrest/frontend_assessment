import { NextPage } from "next/types";
import { JSX } from "react";
import CreateProjectPage from "src/features/CreateProjectPage/CreateProjectPage";

function CreateProjects(): JSX.Element {
  return <CreateProjectPage />;
}

export default CreateProjects as NextPage;
