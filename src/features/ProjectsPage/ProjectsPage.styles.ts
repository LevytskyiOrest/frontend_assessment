import { css, SerializedStyles, Theme } from "@emotion/react";

const ProjectsPageContainer = (theme: Theme): SerializedStyles =>
  css({
    display: "block",
    margin: "0 auto",
    maxWidth: "1200px",
    paddingRight: "50px",
    paddingTop: "150px",
    [theme.breakpoints.down("lg")]: {
      paddingTop: "70px",
      paddingRight: "25px",
    },
    [theme.breakpoints.down("md")]: {
      paddingTop: "35px",
      paddingRight: theme.spacing(3),
      paddingLeft: theme.spacing(3),
    },
  });

const CreateProjectWrapper = (theme: Theme): SerializedStyles =>
  css({
    display: "flex",
    justifyContent: "end",
    marginBottom: theme.spacing(3),
  });

const NoProjectsIcon = (): SerializedStyles =>
  css({
    fontSize: "18px",
  });

const NoProjectsWrapper = (): SerializedStyles =>
  css({
    display: "flex",
    alignItems: "center",
  });

const FavoriteProjectButton = (): SerializedStyles =>
  css({
    width: "38px",
    height: "38px",
    marginRight: "10px",
  });

const FavoriteProjectIcon = (): SerializedStyles =>
  css({
    fontSize: "32px",
  });

const LastCellContainer = (): SerializedStyles =>
  css({
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
  });

const ProjectIdCell = (): SerializedStyles =>
  css({
    cursor: "pointer",
  });

const styles = {
  ProjectsPageContainer,
  CreateProjectWrapper,
  NoProjectsIcon,
  FavoriteProjectButton,
  FavoriteProjectIcon,
  LastCellContainer,
  NoProjectsWrapper,
  ProjectIdCell,
};

export default styles;
