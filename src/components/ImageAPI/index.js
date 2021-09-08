import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_KEY } from "../../config";
//Styles
import { Wrapper, Content } from "./ImageAPI.styles";
// Components
import RandomImage from "./RandomImage";
import { Search } from "./Search";
import { ImageContainer } from "./ImageContainer";

import NextPrevButton from "./NextPrevButton";





export const ImageAPI = () => {
  //Hooks
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("beach");
  const[page, setPage] = useState(1)
  const [url, setUrl] = useState("https://api.unsplash.com/search/photos/")

 
  

  
  //Fetch data with search value
  const fetchData = async () => {
    
    try {
    
      const myFetch = await fetch(
        `${url}?&page=${page}&per_page=30&query=${searchValue}&client_id=${API_KEY}`
      );
      if (!myFetch.ok) {
        throw new Error(myFetch.status);
      }
      console.log(myFetch)
      const data = await myFetch.json();
      console.log(data)

      setData(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchRandom = () => {
    setUrl("https://api.unsplash.com/photos/random")
  
    
    fetchData();

  }



 


  
 

  useEffect(() => {
    fetchData();
  }, [page]);

  //Functions
  const setSearch = (searchInput) => {
    setSearchValue(searchInput);
  };

  const handlepage = () => {
    setPage(page+1)
  }

  const handlePrevPage = () => {
    setPage(page-1)
  }





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
        <RandomImage fetchRandom={fetchRandom}/>
        
        <ImageContainer data={data} />
              <div className="btnContainer">
      <NextPrevButton titleText="Previus" handlePage={handlePrevPage} />
      <NextPrevButton titleText="Next" handlePage={handlepage}/>
      </div>
      </Content>
    </Wrapper>
  );
};
