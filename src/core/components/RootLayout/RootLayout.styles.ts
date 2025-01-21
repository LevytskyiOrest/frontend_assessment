import { css, SerializedStyles, Theme } from "@emotion/react";
import { favoriteBarSize, favoriteMobileBarSize } from "src/core/styles/global.theme";

const layoutContainer = (theme: Theme): SerializedStyles =>
  css({
    display: "block",
    position: "relative",
    [theme.breakpoints.down("lg")]: {
      position: "static",
    },
  });

const main = (theme: Theme): SerializedStyles =>
  css({
    flex: 1,
    paddingLeft: favoriteBarSize,
    [theme.breakpoints.down("md")]: {
      paddingLeft: favoriteMobileBarSize,
    },
  });

const styles = {
  layoutContainer,
  main,
};

export default styles;
