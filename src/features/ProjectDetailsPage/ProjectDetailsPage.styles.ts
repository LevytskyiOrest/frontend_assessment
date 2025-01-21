import { css, SerializedStyles, Theme } from "@emotion/react";

const ProjectDetailsContainer = (theme: Theme): SerializedStyles =>
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

const InputWrapper = (theme: Theme): SerializedStyles =>
  css({
    marginBottom: theme.spacing(2),
  });

const InfoWrapper = (theme: Theme): SerializedStyles =>
  css({
    display: "flex",
    gap: theme.spacing(3),
    "& > div": {
      flex: "0 0 150px",
    },
  });

const InfoDescriptionWrapper = (): SerializedStyles =>
  css({
    minHeight: "100px",
  });

const InfoName = (): SerializedStyles =>
  css({
    textAlign: "right",
  });

const InputWithFavoriteWrapper = (theme: Theme): SerializedStyles =>
  css({
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(2),
  });

const BtnsWrapper = (theme: Theme): SerializedStyles =>
  css({
    marginTop: theme.spacing(4),
    display: "flex",
    gap: theme.spacing(3),
    "& > div": {
      flex: "0 0 150px",
    },
  });

const BackBtnWrapper = (): SerializedStyles =>
  css({
    textAlign: "right",
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

const styles = {
  ProjectDetailsContainer,
  InputWrapper,
  InfoWrapper,
  InfoDescriptionWrapper,
  InfoName,
  BtnsWrapper,
  BackBtnWrapper,
  FavoriteProjectButton,
  FavoriteProjectIcon,
  InputWithFavoriteWrapper,
};

export default styles;
