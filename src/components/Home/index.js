import React from "react";
//Styles
import { Wrapper, Content } from "./Home.styles";

//Components
import Countdown from "../Countdown";

const Home = () => (
  <Wrapper>
    <Content>
      <Countdown />
    </Content>
  </Wrapper>
);

export default Home;
