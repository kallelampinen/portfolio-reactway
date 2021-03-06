import React from "react";
import InputField from "./InputField";
import SearchButton from "./SearchButton";

export const Search = ({ searchValue, setSearch, fetchData }) => {
  return (
    <div className="searchContainer">
      <InputField
        searchValue={searchValue}
        setSearch={setSearch}
        fetchData={fetchData}
      />
      <SearchButton fetchData={fetchData} />
    </div>
  );
};
