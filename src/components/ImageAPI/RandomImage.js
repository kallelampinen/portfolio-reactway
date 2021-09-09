import React from "react";

export const RandomImage = ({ random }) => {
  return (
    <div>
      {random.map((item) => {
        return (
          <div className="randomImage">
            <img src={item.urls.regular} alt="" />
            <p>{item.alt_description}</p>
          </div>
        );
      })}
    </div>
  );
};
