import React from "react";

function InputField({ searchValue, setSearch }) {
  const handleChange = (e) => {
    const searchInput = e.target.value;
    setSearch(searchInput);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type something!"
        onChange={handleChange}
        value={searchValue}
      />
    </div>
  );
}

export default InputField;
