import { css, SerializedStyles, Theme } from "@emotion/react";

const CreateProjectPageContainer = (theme: Theme): SerializedStyles =>
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

const BtnWrapper = (theme: Theme): SerializedStyles =>
  css({
    marginTop: theme.spacing(4),
  });

const styles = {
  CreateProjectPageContainer,
  InputWrapper,
  BtnWrapper,
};

export default styles;
