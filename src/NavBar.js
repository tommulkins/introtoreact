/** @jsx jsx */
import React from "react";
import { Link } from "@reach/router";
import { css, jsx } from "@emotion/core";

const color = "pink";

const NavBar = () => (
  <header
    css={css`
      background-color: ${color};
      padding: 15px;
    `}
  >
    <Link to="/">Adopt Me!</Link>
    <span aria-label="logo" role="img">
      🐩
    </span>
  </header>
);

export default NavBar;
