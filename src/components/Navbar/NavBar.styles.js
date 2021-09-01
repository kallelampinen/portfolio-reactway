import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  z-index: 90;
  position: absolute;

  a {
    text-decoration: none;
    color: white;
  }
  li {
    list-style: none;
    padding-right: 10px;
  }
  ul {
    display: flex;
  }
`;
export const Content = styled.nav`
  position: fixed;
  top: 0;
  padding: 10px 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  height: 50px;
  background-color: black;
`;
