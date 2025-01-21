/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from "@emotion/react";

import { ChangeEvent, JSX, useState } from "react";
import styles from "./CreateProjectPage.styles";
import { Button, Snackbar, TextField } from "@mui/material";
import { IProject } from "../ProjectsPage/Projects.types";
import { useProjectsContext, useProjectsDispatch } from "../ProjectsPage/Projects.context";
import { useRouter } from "next/router";

export default function CreateProjectPage(): JSX.Element {
  const [showFailSnackBar, setShowFailSnackBar] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const projectsDispatch = useProjectsDispatch();
  const projectsData = useProjectsContext();

  const [projectId, setProjectId] = useState<string>("");
  const [projectName, setProjectName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("2025-01-01");
  const [endDate, setEndDate] = useState<string>("2026-01-01");
  const [projectManager, setProjectManager] = useState<string>("");

  const handleAPI = async () => {
    setIsLoading(true);

    const objToSend: IProject = {
      id: projectId,
      name: projectName,
      description,
      startDate,
      endDate,
      manager: projectManager,
      favorite: false,
    };

    const newProjectsArray = [...projectsData.projects];
    newProjectsArray.push(objToSend);

    try {
      if (projectId !== "error") {
        setTimeout(async () => {
          await fetch("/api/success");
          projectsDispatch({
            type: "projects:update",
            projects: newProjectsArray,
          });

          router.push("/projects");

          setIsLoading(false);
        }, 2000);
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log({ error });
      setShowFailSnackBar(true);
    }
  };

  return (
    <div css={styles.CreateProjectPageContainer}>
      <div>
        <div css={styles.InputWrapper}>
          <TextField
            variant="outlined"
            color="primary"
            label="Project ID"
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
            defaultValue={startDate}
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
            defaultValue={endDate}
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
            Create
          </Button>
        </div>
      </div>
      <Snackbar
        open={showFailSnackBar}
        autoHideDuration={6000}
        message="Something went wrong. Please refresh the page and try again."
      />
    </div>
  );
}
