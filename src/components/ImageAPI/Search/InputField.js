import React from "react";

function InputField({ searchValue, setSearch, fetchData }) {
  const handleChange = (e) => {
    const searchInput = e.target.value;
    setSearch(searchInput);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchData();
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type something!"
        onChange={handleChange}
        
        value={searchValue}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default InputField;
