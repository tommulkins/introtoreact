import React from "react";
import { Link } from "@reach/router";
import { css } from "@emotion/core";
import colors from "./colors";

const NavBar = () => (
  <header
    css={css`
      background-color: ${colors.primary};
      padding: 15px;
      margin-bottom: 1rem;
    `}
  >
    <Link to="/">Adopt Me!</Link>
    <span
      aria-label="logo"
      role="img"
      css={css`
        font-size: 60px;
      `}
    >
      🐩
    </span>
  </header>
);

export default NavBar;
