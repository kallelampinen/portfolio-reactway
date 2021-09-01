//Background
import BackgroundImage from "../../images/background.jpg";
import { Wrapper } from "./BackgroundImage.styles";

export const BackGroundImage = () => (
  <Wrapper>
    <img src={BackgroundImage} alt="background" />
  </Wrapper>
);
