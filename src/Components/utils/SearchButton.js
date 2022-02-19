import React from "react";

const SearchButton = ({ changeStatus, name }) => {
  const handleClick = () => {
    changeStatus();
  };
  return (
    <button onClick={handleClick} className="search-button">
      {name}
    </button>
  );
};

export default SearchButton;
