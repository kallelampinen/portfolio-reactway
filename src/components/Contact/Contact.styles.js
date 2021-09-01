import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  height: 100vh;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: white;
  padding-top: 20vh;
  img {
    width: 50px;
    height: 50px;
  }

  a {
    text-decoration: none;
    color: white;
    padding: 5px;
  }
  a:hover {
    filter: brightness(1.3);
  }
`;
