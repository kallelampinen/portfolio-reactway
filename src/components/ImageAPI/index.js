import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_KEY } from "../../config";
//Styles
import { Wrapper, Content } from "./ImageAPI.styles";
// Components
import RandomImage from "./RandomImage";
import { Search } from "./Search";
import { ImageContainer } from "./ImageContainer";

export const ImageAPI = () => {
  //Hooks
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const fetchData = async () => {
    try {
      const myFetch = await fetch(
        `https://api.unsplash.com/search/photos?&per_page=30&query=${searchValue}&client_id=${API_KEY}`
      );
      if (!myFetch.ok) {
        throw new Error(myFetch.status);
      }
      const data = await myFetch.json();

      setData(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  //Functions
  const setSearch = (searchInput) => {
    setSearchValue(searchInput);
  };

  return (
    <Wrapper>
      <Link to="/projects">
        <p>Back</p>
      </Link>
      <Content>
        <h1>Unsplash API</h1>
        <Search
          searchValue={searchValue}
          setSearch={setSearch}
          fetchData={fetchData}
        />
        <RandomImage />
        <ImageContainer data={data} />
      </Content>
    </Wrapper>
  );
};
