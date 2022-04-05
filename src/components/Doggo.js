import React from "react";

function Doggo({ dog, onGoodDog }) {

  function handleGoodDogClick() {
    onGoodDog(dog.id)
  }

  function renderDog() {
    if (dog!==undefined) {
      return <div id="dog-info">
        <img src={dog.image} alt={dog.name} />
        <h2>{dog.name}</h2>
        <button onClick={handleGoodDogClick}>{dog.isGoodDog ? "Good Dog!" : "Bad Dog"}</button>
      </div>
    }
  }

  return (
    <div id="dog-summary-container">
      <h1>DOGGO:</h1>
      {renderDog()}
    </div>
  );
}

export default Doggo;