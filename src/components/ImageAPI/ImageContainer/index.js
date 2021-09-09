import React from "react";
import { Wrapper, Content } from "./ImageContainer.styles";

export const ImageContainer = ({ data }) => {
  return (
    <Wrapper>
      <Content>
        {data.map((item) => {
          return (
            <div className="gridItem">
              <img src={item.urls.regular} alt="" />
              <p>{item.alt_description}</p>
            </div>
          );
        })}
      </Content>
    </Wrapper>
  );
};
