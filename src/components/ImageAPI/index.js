import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Content } from "./ImageAPI.styles";
import { API_KEY } from "../../config";

import RandomImage from "./RandomImage";
import { Search } from "./Search";

export const ImageAPI = () => {
  const fetchData = async () => {
    try {
      const myFetch = await fetch(
        `https://api.unsplash.com/search/photos?&per_page=30&query="car"&client_id=${API_KEY}`
      );
      if (!myFetch.ok) {
        throw new Error(myFetch.status);
      }
      const data = await myFetch.json();

      console.log(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  fetchData();
  console.log(API_KEY);
  return (
    <Wrapper>
      <Link to="/projects">
        <p>Back</p>
      </Link>
      <Content>
        <h1>Unsplash API</h1>
        <Search />
        <RandomImage />
      </Content>
    </Wrapper>
  );
};
