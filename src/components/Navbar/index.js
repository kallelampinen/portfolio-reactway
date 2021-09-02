import React from "react";
import { Wrapper, Content } from "./NavBar.styles";
import { Link } from "react-router-dom";

export const NavBar = () => (
  <Wrapper>
    <Content>
      <h1>Kalle Lampinen</h1>
      <ul>
        <li key="1">
          <Link to="/">Home</Link>
        </li>
        <li key="2">
          <Link to="/projects">Projects</Link>
        </li>
        <li key="3">
          <Link to="/about">About</Link>
        </li>
        <li key="4">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </Content>
  </Wrapper>
);
