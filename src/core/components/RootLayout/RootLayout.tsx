/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from "@emotion/react";
import styles from "./RootLayout.styles";
import { JSX } from "react";
import FavoriteProjectsBar from "../FavoriteProjectsBar/FavoriteProjectsBar";

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div css={styles.layoutContainer}>
      <FavoriteProjectsBar />
      <main css={styles.main}>
        <div>{children}</div>
      </main>
    </div>
  );
}
