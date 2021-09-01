import styled from "styled-components";
import BreadBackground from "../../images/wood.jpg";

export const Wrapper = styled.div`
  z-index: 91;
  position: fixed;
  width: 100%;
  background-image: url(${BreadBackground});
  background-size: cover;
  background-repeat: repeat-x;
  height: 100vh;
  background-position: center;
  width: 100%;
`;
export const Content = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 40px;
  color: black;

  a {
    position: fixed;
    right: 0;
    padding: 10px 40px;
    color: white;
    text-decoration: none;
  }
  img {
    width: 50px;
    height: 50px;
  }
`;

export const MainContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 20vh;
  width: 250px;
  margin-top: 10vh;
  background-image: linear-gradient(rgb(211, 190, 166), rgb(226, 217, 193));
  padding: 30px;
  border-radius: 3px;
  box-shadow: 0 20px 20px 20px rgb(0 0 0 / 70%);

  p {
    padding-top: 5px;
    font-size: 11px;
    font-weight: 700;
  }
`;

export const Ingridients = styled.div`
  opacity: ${(props) => props.opacity};
`;
