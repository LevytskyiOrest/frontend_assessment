/** @jsxRuntime classic */
/** @jsx jsx */
import Link from "next/link";

import { jsx } from "@emotion/react";

import { JSX } from "react";
import stylesHomePage from "./HomePage.styles";
import { Button } from "@mui/material";

export default function HomePage(): JSX.Element {
  return (
    <div css={stylesHomePage.HomePageSubscriptionContainer}>
      <Link href="/projects">
        <Button variant="contained">Click to see your projects.</Button>
      </Link>
    </div>
  );
}
