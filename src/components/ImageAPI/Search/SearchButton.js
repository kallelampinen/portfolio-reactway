import React from "react";

function SearchButton({ fetchData }) {
  return (
    <div>
      <button onClick={fetchData}>Search!</button>
    </div>
  );
}

export default SearchButton;
