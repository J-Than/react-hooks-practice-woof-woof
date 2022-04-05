import React from "react";

function DogBar({ pups, onClick, filter }) {

  function handleClick(e) {
    onClick(parseInt(e.target.id))
  }

  const pupsToList = filter ? pups.filter(p => p.isGoodDog) : [...pups]

  return (
      <div id="dog-bar">
        {pupsToList.map(pup => <span key={pup.id} id={pup.id} onClick={handleClick}>{pup.name}</span>)}
      </div>
  );
}

export default DogBar;