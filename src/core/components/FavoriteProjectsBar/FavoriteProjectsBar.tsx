/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from "@emotion/react";
import { JSX, useEffect, useId, useState } from "react";
import styles from "./FavoriteProjectsBar.styles";
import { IFavoriteProjectsBarProps } from "./FavoriteProjectsBar.types";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import {
  getProjectsFromStorage,
  useProjectsContext,
  useProjectsDispatch,
} from "src/features/ProjectsPage/Projects.context";
import Link from "next/link";
import { CircularProgress, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function FavoriteProjectsBar({ name }: IFavoriteProjectsBarProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const id = useId();
  const projectsData = useProjectsContext();
  const projectsDispatch = useProjectsDispatch();

  useEffect(() => {
    const projectsFromStorage = getProjectsFromStorage();

    if (projectsFromStorage) {
      projectsDispatch({
        type: "projects:update",
        projects: projectsFromStorage,
      });
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  const handleDrawerToggle = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <div css={styles.FavoriteProjectsBarRoot}>
      <div css={styles.FavoriteProjectsBarDesktop}>
        <div>Favorite Projects</div>
        {isLoading ? (
          <CircularProgress size="20px" />
        ) : (
          <div>
            <div>{name}</div>
            {projectsData.projects.length > 0 ? (
              <ul>
                {projectsData.projects.map((project) =>
                  project.favorite ? (
                    <li key={`${project.id}-${id}`}>
                      <Link href={`/projects/${project.id}`}>{project.name}</Link>
                    </li>
                  ) : null,
                )}
              </ul>
            ) : (
              <div css={styles.NoFavoriteProjects}>
                No favorite projects{" "}
                <SentimentVeryDissatisfiedIcon css={styles.NoFavoriteProjectsIcon} />
              </div>
            )}
          </div>
        )}
      </div>
      <div css={styles.FavoriteProjectsBarMobile}>
        <IconButton aria-label="drawer" onClick={handleDrawerToggle}>
          <MenuIcon color="secondary" />
        </IconButton>
      </div>
      <div>
        <Drawer
          anchor="left"
          variant="temporary"
          open={isOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <div>
            <div>Favorite Projects</div>
            {isLoading ? (
              <CircularProgress size="20px" />
            ) : (
              <div>
                <div>{name}</div>
                {projectsData.projects.length > 0 ? (
                  <ul>
                    {projectsData.projects.map((project) =>
                      project.favorite ? (
                        <li key={`${project.id}-${id}`}>
                          <Link href={`/projects/${project.id}`}>{project.name}</Link>
                        </li>
                      ) : null,
                    )}
                  </ul>
                ) : (
                  <div css={styles.NoFavoriteProjects}>
                    No favorite projects{" "}
                    <SentimentVeryDissatisfiedIcon css={styles.NoFavoriteProjectsIcon} />
                  </div>
                )}
              </div>
            )}
          </div>
        </Drawer>
      </div>
    </div>
  );
}
