import { css, SerializedStyles } from "@emotion/react";

const HomePageSubscriptionContainer = (): SerializedStyles =>
  css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  });

const stylesHomePage = {
  HomePageSubscriptionContainer,
};

export default stylesHomePage;
