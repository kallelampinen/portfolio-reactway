import React from "react";
import { Wrapper, Content } from "./NavBar.styles";
import { Link } from "react-router-dom";

export const NavBar = () => (
  <Wrapper>
    <Content>
      <h1>Kalle Lampinen</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </Content>
  </Wrapper>
);
