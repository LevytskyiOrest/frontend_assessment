/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from "@emotion/react";

import { JSX, useId } from "react";
import styles from "./ProjectsPage.styles";
import Link from "next/link";
import {
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { useProjectsContext, useProjectsDispatch } from "./Projects.context";

export default function ProjectsPage(): JSX.Element {
  const id = useId();
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

  return (
    <div css={styles.ProjectsPageContainer}>
      <div css={styles.CreateProjectWrapper}>
        <Link href="/projects/new">
          <Button variant="contained">Create Project</Button>
        </Link>
      </div>
      <div>
        {projectsData.projects.length > 0 ? (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Project ID</TableCell>
                  <TableCell>Project Name</TableCell>
                  <TableCell>Start Date</TableCell>
                  <TableCell>End Date</TableCell>
                  <TableCell>Project Manager</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {projectsData.projects.map((project) => (
                  <TableRow
                    key={`${id}-${project.id}`}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" css={styles.ProjectIdCell}>
                      <Link href={`/projects/${project.id}`}>{project.id}</Link>
                    </TableCell>
                    <TableCell>{project.name}</TableCell>
                    <TableCell>{project.startDate}</TableCell>
                    <TableCell>{project.endDate}</TableCell>
                    <TableCell>{project.manager}</TableCell>
                    <TableCell css={styles.LastCellContainer}>
                      {project.favorite ? (
                        <IconButton
                          aria-label="favorite"
                          css={styles.FavoriteProjectButton}
                          onClick={() => {
                            handleProjectFavorite(project.id);
                          }}
                        >
                          <BookmarkIcon css={styles.FavoriteProjectIcon} color="error" />
                        </IconButton>
                      ) : (
                        <IconButton
                          aria-label="favorite"
                          css={styles.FavoriteProjectButton}
                          onClick={() => {
                            handleProjectFavorite(project.id);
                          }}
                        >
                          <BookmarkBorderIcon css={styles.FavoriteProjectIcon} color="secondary" />
                        </IconButton>
                      )}
                      <Link href={`/projects/${project.id}/edit`}>
                        <Button variant="contained" size="small">
                          Edit
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <div css={styles.NoProjectsWrapper}>
            No projects <SentimentVeryDissatisfiedIcon css={styles.NoProjectsIcon} />
          </div>
        )}
      </div>
    </div>
  );
}
