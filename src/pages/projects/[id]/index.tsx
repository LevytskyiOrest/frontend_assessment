import { GetServerSidePropsContext, NextPage } from "next/types";
import { JSX } from "react";
import ProjectDetailsPage from "src/features/ProjectDetailsPage/ProjectDetailsPage";

function ProjectDetails({ id }: { id: string }): JSX.Element {
  return <ProjectDetailsPage id={id} />;
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext<{ id: string }>,
): Promise<{
  props: { id: string };
}> => {
  return { props: { id: context.params.id } };
};

export default ProjectDetails as NextPage;
