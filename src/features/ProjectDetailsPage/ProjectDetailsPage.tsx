/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from "@emotion/react";

import { JSX, useEffect } from "react";
import styles from "./ProjectDetailsPage.styles";
import { Button, IconButton, Link } from "@mui/material";
import { useProjectsContext, useProjectsDispatch } from "../ProjectsPage/Projects.context";

import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { useRouter } from "next/router";

export default function ProjectDetailsPage({ id }: { id: string }): JSX.Element {
  const router = useRouter();

  const projectsData = useProjectsContext();
  const projectsDispatch = useProjectsDispatch();

  const handleProjectFavorite = (projectId: string) => {
    const newProjectsArray = [...projectsData.projects];
    const projectChange = newProjectsArray.find((project) => project.id === projectId);
    projectChange.favorite = !projectChange.favorite;

    projectsDispatch({
      type: "projects:update",
      projects: newProjectsArray,
    });
  };

  const projectToShow = projectsData.projects.find((project) => project.id === id);

  useEffect(() => {
    if (!projectToShow) {
      router.push("/404");
    }
  }, []);

  return projectToShow ? (
    <div css={styles.ProjectDetailsContainer}>
      <div>
        <div css={styles.InputWithFavoriteWrapper}>
          <div css={styles.InfoWrapper}>
            <div css={styles.InfoName}>Project ID</div>
            <div>{projectToShow.id}</div>
          </div>
          <div>
            {projectToShow.favorite ? (
              <IconButton
                aria-label="favorite"
                css={styles.FavoriteProjectButton}
                onClick={() => {
                  handleProjectFavorite(projectToShow.id);
                }}
              >
                <BookmarkIcon css={styles.FavoriteProjectIcon} color="error" />
              </IconButton>
            ) : (
              <IconButton
                aria-label="favorite"
                css={styles.FavoriteProjectButton}
                onClick={() => {
                  handleProjectFavorite(projectToShow.id);
                }}
              >
                <BookmarkBorderIcon css={styles.FavoriteProjectIcon} color="secondary" />
              </IconButton>
            )}
          </div>
        </div>
        <div css={styles.InfoWrapper}>
          <div css={styles.InfoName}>Project Name</div>
          <div>{projectToShow.name}</div>
        </div>
        <div css={styles.InputWrapper}>
          <div css={[styles.InfoWrapper, styles.InfoDescriptionWrapper]}>
            <div css={styles.InfoName}>Description</div>
            <div>{projectToShow.description}</div>
          </div>
        </div>
        <div css={styles.InputWrapper}>
          <div css={styles.InfoWrapper}>
            <div css={styles.InfoName}>Start Date</div>
            <div>{projectToShow.startDate}</div>
          </div>
        </div>
        <div css={styles.InputWrapper}>
          <div css={styles.InfoWrapper}>
            <div css={styles.InfoName}>End Date</div>
            <div>{projectToShow.endDate}</div>
          </div>
        </div>
        <div css={styles.InputWrapper}>
          <div css={styles.InfoWrapper}>
            <div css={styles.InfoName}>Project Manager</div>
            <div>{projectToShow.manager}</div>
          </div>
        </div>
        <div css={styles.BtnsWrapper}>
          <div css={styles.BackBtnWrapper}>
            <Link href={`/projects`}>
              <Button variant="contained">Back</Button>
            </Link>
          </div>
          <div>
            <Link href={`/projects/${id}/edit`}>
              <Button variant="contained">Edit</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
