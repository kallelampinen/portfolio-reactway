import React from "react";
import { Wrapper, Content } from "./Projects.styles";
import { Link } from "react-router-dom";
import apiImage from "../../images/bread.JPG";
import breadImage from "../../images/unsplash2.jpg";
import Home from "../Home";
import { BackGroundImage } from "../BackgroundImage";

const Projects = () => (
  <Wrapper>
    <Content>
      <div className="projItem">
        <h2>Sourdough calculator</h2>
        <Link to="/projects/sourdough">
          <img src={apiImage} />
        </Link>
      </div>
      <div className="projItem">
        <h2>Image API</h2>
        <Link to="/projects/imageapi">
          <img src={breadImage} />
        </Link>
      </div>
    </Content>
  </Wrapper>
);

export default Projects;