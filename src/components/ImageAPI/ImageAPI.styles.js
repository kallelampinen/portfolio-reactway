import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-color: black;
  height: 100vh;
  a {
    position: fixed;
    right: 0;
    padding: 15px 40px;
    color: white;
    text-decoration: none;
  }
`;
export const Content = styled.div`
  .nextPrev {
    color: white;
    background-color: black;
    border: none;
    font-size: 20px;
    padding: 5px;
    cursor: pointer;
    margin: 50px 0px;
  }

  .btnContainer {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  background-color: black;
  .next {
    cursor: pointer;
    color: white;
    margin-bottom: 50px;
    background-color: black;
    border: none;
    font-size: 30px;
  }
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 50px;
  }
  color: white;
  padding-top: 10vh;
  img {
    width: 50px;
    height: 50px;
  }

  .searchContainer {
    width: 350px;
    padding-top: 30px;
    display: flex;
    justify-content: center;
    padding: 10px 0px;
    input {
      ::placeholder {
        text-align: center;
      }

      width: 200px;
      height: 30px;
    }
    button {
      cursor: pointer;
      width: 50px;
      height: 30px;
    }
  }

  .randomBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    color: black;
    width: 250px;
    cursor: pointer;
    margin-bottom: 20px;
    height: 30px;
  }
  img {
    height: 350px;
    width: 350px;
    object-fit: cover;
  }

  .randomImage {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .randomImage > p {
    padding-top: 10px;
  }
`;
