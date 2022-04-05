import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import DogBar from "./DogBar";
import Doggo from "./Doggo";

function App() {

  const [pups, setPups] = useState([]);
  const [filterGood, setFilterGood] = useState(false);
  const [selectedPup, setSelectedPup] = useState(undefined)

  useEffect(() => {
    fetch("http://localhost:3001/pups")
    .then(r => r.json())
    .then(data => setPups(data))
  }, [])

  function handleDogClick(pupID) {
    setSelectedPup(pups.find(p => p.id===pupID));
  }

  function handleFilter() {
    setFilterGood(filterGood => filterGood = !filterGood)
  }

  function handleGoodDogToggle(dogID) {
    const newGoodValue = !selectedPup.isGoodDog;
    fetch(`http://localhost:3001/pups/${dogID}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({"isGoodDog": newGoodValue})
    })
    .then(r => r.json())
    .then(data => {
      const goodSwitch = [...pups];
      const found = goodSwitch.find(p => p.id===dogID);
      const index = goodSwitch.indexOf(found);
      goodSwitch[index].isGoodDog = newGoodValue;
      setPups(goodSwitch)
    })
  }

  return (
    <div className="App">
      <Filter filter={filterGood} onFilter={handleFilter} />
      <DogBar pups={pups} onClick={handleDogClick} filter={filterGood} />
      <Doggo dog={selectedPup} onGoodDog={handleGoodDogToggle} />
    </div>
  );
}

export default App;
