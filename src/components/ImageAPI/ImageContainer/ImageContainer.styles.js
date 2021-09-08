import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-top: 40px;
  p {
    padding-top: 5px;
  }
  img {
    height: 350px;
    width: 350px;
    object-fit: cover;
  }
  .gridItem {
    padding: 15px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
