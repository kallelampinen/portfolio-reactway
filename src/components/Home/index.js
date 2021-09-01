import React from "react";
//Styles
import { Wrapper, Content } from "./Home.styles";

//Components
import Countdown from "../Countdown";
import { BackGroundImage } from "../BackgroundImage";
import { NavBar } from "../Navbar";

const Home = () => (
  <Wrapper>
    <Content>
      <Countdown />
    </Content>
  </Wrapper>
);

export default Home;
