import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;
export const Content = styled.nav`
  padding-top: 20vh;
  display: flex;
  width: 550px;
  justify-content: space-between;
  img {
    width: 250px;
    height: 330px;
    border-radius: 30px;
    object-fit: cover;
    filter: saturate(0);
    border: solid white 2px;
  }

  img:hover {
    filter: saturate(1);
  }

  h2 {
    color: white;
    padding-bottom: 10px;
  }

  .projItem {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
