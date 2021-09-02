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
  height: 65vh;
  background-image: linear-gradient(rgb(211, 190, 166), rgb(226, 217, 193));
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 20px 20px 20px rgb(0 0 0 / 70%);

  .btn {
    border: none;
    border-radius: 3px;
    margin-right: 5px;
    width: 60px;
    height: 20px;
    border: solid black 1px;
    box-shadow: 0 2px 3px 1px rgb(0 0 0 / 20%);
  }
  .btns {
    display: flex;
    width: 130px;
  }

  input {
    margin-bottom: 5px;
    width: 130px;
    color: ${(props) => props.required};
  }

  p {
    font-size: 11px;
    font-weight: 700;
    font-size: 12px;
  }

  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
  }

  .need {
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-size: 16px;
      text-align: center;
    }
    box-shadow: 0 2px 2px 2px rgb(0 0 0 / 30%);
    margin-bottom: 10px;
    border-radius: 3px;
    width: 80px;

    margin-top: 10px;
  }
`;

export const Header = styled.div`
  box-shadow: 0 2px 2px 2px rgb(0 0 0 / 30%);
  margin-bottom: 10px;
  border-radius: 3px;
  width: 170px;
`;

export const Ingridients = styled.div`
  opacity: ${(props) => props.opacity};
`;

export const Required = styled.div`
  select {
    color: ${(props) => props.required};
  }
`;
