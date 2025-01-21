/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from "@emotion/react";

import { ChangeEvent, JSX, useEffect, useState } from "react";
import styles from "./EditProjectPage.styles";
import { Button, Snackbar, TextField } from "@mui/material";
import { useProjectsContext, useProjectsDispatch } from "../ProjectsPage/Projects.context";
import { useRouter } from "next/router";

export default function EditProjectPage({ id }: { id: string }): JSX.Element {
  const [showFailSnackBar, setShowFailSnackBar] = useState<boolean>(false);
  const router = useRouter();

  const projectsDispatch = useProjectsDispatch();
  const projectsData = useProjectsContext();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [projectId, setProjectId] = useState<string>("");
  const [projectName, setProjectName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("2025-01-01");
  const [endDate, setEndDate] = useState<string>("2026-01-01");
  const [projectManager, setProjectManager] = useState<string>("");

  const handleAPI = async () => {
    setIsLoading(true);
    const newProjectsArray = [...projectsData.projects];
    const updatetProjectIndex = newProjectsArray.findIndex((project) => project.id === id);

    if (updatetProjectIndex !== -1) {
      newProjectsArray[updatetProjectIndex].id = projectId;
      newProjectsArray[updatetProjectIndex].name = projectName;
      newProjectsArray[updatetProjectIndex].description = description;
      newProjectsArray[updatetProjectIndex].startDate = startDate;
      newProjectsArray[updatetProjectIndex].endDate = endDate;
      newProjectsArray[updatetProjectIndex].manager = projectManager;
    }
    try {
      if (projectId !== "error") {
        setTimeout(async () => {
          await fetch("/api/success");
        }, 3000);

        projectsDispatch({
          type: "projects:update",
          projects: newProjectsArray,
        });

        router.push("/projects");
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log({ error });
      setShowFailSnackBar(true);
    }
  };

  useEffect(() => {
    const projectData = projectsData.projects.find((project) => project.id === id);
    if (projectData) {
      setProjectId(projectData.id);
      setProjectName(projectData.name);
      setStartDate(projectData.startDate);
      setEndDate(projectData.endDate);
      setProjectManager(projectData.manager);
    }
  }, [projectsData, id]);

  const projectToShow = projectsData.projects.find((project) => project.id === id);

  return projectToShow ? (
    <div css={styles.EditProjectPageContainer}>
      <div>
        <div css={styles.InputWrapper}>
          <TextField
            variant="outlined"
            color="primary"
            label="Project ID"
            defaultValue={projectToShow.id}
            onChange={(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
              setProjectId(event.target.value);
            }}
          />
        </div>
        <div css={styles.InputWrapper}>
          <TextField
            variant="outlined"
            color="primary"
            label="Project Name"
            defaultValue={projectToShow.name}
            onChange={(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
              setProjectName(event.target.value);
            }}
          />
        </div>
        <div css={styles.InputWrapper}>
          <TextField
            variant="outlined"
            color="primary"
            multiline
            minRows={4}
            label="Description"
            defaultValue={projectToShow.description}
            onChange={(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
              setDescription(event.target.value);
            }}
          />
        </div>
        <div css={styles.InputWrapper}>
          <TextField
            variant="outlined"
            color="primary"
            label="Start Date"
            type="date"
            defaultValue={projectToShow.startDate}
            onChange={(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
              setStartDate(event.target.value);
            }}
          />
        </div>
        <div css={styles.InputWrapper}>
          <TextField
            variant="outlined"
            color="primary"
            label="End Date"
            type="date"
            defaultValue={projectToShow.endDate}
            onChange={(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
              setEndDate(event.target.value);
            }}
          />
        </div>
        <div css={styles.InputWrapper}>
          <TextField
            variant="outlined"
            color="primary"
            label="Project Manager"
            defaultValue={projectToShow.manager}
            onChange={(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
              setProjectManager(event.target.value);
            }}
          />
        </div>
        <div css={styles.BtnWrapper}>
          <Button
            variant="contained"
            onClick={handleAPI}
            loading={isLoading}
            disabled={!projectId || !projectName}
          >
            Update
          </Button>
        </div>
      </div>
      <Snackbar
        open={showFailSnackBar}
        autoHideDuration={6000}
        message="Something went wrong. Please refresh the page and try again."
      />
    </div>
  ) : null;
}
