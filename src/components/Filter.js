import React from "react";

function Filter({ filter, onFilter }) {

  function handleFilterClick() {
    onFilter()
  }

  return (
    <div id="filter-div">
      <button id="good-dog-filter" onClick={handleFilterClick}>Filter good dogs: {filter ? "ON" : "OFF"}</button>
    </div>
  );
}

export default Filter;
