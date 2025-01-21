import { css, SerializedStyles, Theme } from "@emotion/react";
import { Colors, favoriteBarSize, favoriteMobileBarSize } from "src/core/styles/global.theme";

const FavoriteProjectsBarRoot = (theme: Theme): SerializedStyles =>
  css({
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    left: 0,
    top: 0,
    width: favoriteBarSize,
    height: "100vh",
    paddingTop: 100,
    borderRight: `2px solid ${Colors.FieldStroke}`,
    [theme.breakpoints.down("md")]: {
      width: favoriteMobileBarSize,
      paddingTop: 0,
    },
  });

const FavoriteProjectsBarDesktop = (theme: Theme): SerializedStyles =>
  css({
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  });

const FavoriteProjectsBarMobile = (theme: Theme): SerializedStyles =>
  css({
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  });

const NoFavoriteProjectsIcon = (): SerializedStyles =>
  css({
    fontSize: "18px",
  });

const NoFavoriteProjects = (): SerializedStyles =>
  css({
    display: "flex",
    alignItems: "center",
  });

const styles = {
  FavoriteProjectsBarRoot,
  FavoriteProjectsBarDesktop,
  FavoriteProjectsBarMobile,
  NoFavoriteProjectsIcon,
  NoFavoriteProjects,
};

export default styles;
