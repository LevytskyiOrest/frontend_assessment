import { GetServerSidePropsContext, NextPage } from "next/types";
import { JSX } from "react";
import EditProjectPage from "src/features/EditProjectPage/EditProjectPage";

function ProjectEdit({ id }: { id: string }): JSX.Element {
  return <EditProjectPage id={id} />;
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext<{ id: string }>,
): Promise<{
  props: { id: string };
}> => {
  return { props: { id: context.params.id } };
};

export default ProjectEdit as NextPage;
