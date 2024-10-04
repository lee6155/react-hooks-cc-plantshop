import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantState, setPlantState] = useState([])
  const [search, setSearch] = useState("")
  // rename plantState to just plants

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(response => response.json())
    .then(data => setPlantState(data))
  },[])

  const newPlantState = plantState.filter(function(plant){
    return plant.name.toLowerCase().includes(search.toLowerCase())
  })
    
  function newPlantFromInput(newPlant) {
    return setPlantState([...plantState, newPlant])
  }

  function newPriceFromPlantCard(updatedPlantInfo) {
    let updatedPlantArray = plantState.map(function(plant){
      if(plant.id === updatedPlantInfo.id) {
        return updatedPlantInfo
      } else {
        return plant
      }
    })

    setPlantState(updatedPlantArray)
  }

  function plantToDeleteFromCard(idNumber) {
    fetch(`http://localhost:6001/plants/${idNumber}`, {
      method: "DELETE",
    })
    .then(response => response.json())
    .then(function(data) {
      let plantArrayExclDeleted = plantState.filter(function(plant) {
        return plant.id !== data.id
      })
      setPlantState(plantArrayExclDeleted)
    })
  }

  return (
    <main>
      <NewPlantForm newPlantFromInput={newPlantFromInput}/>
      <Search dataFromSearch={setSearch}/>
      <PlantList plantToDeleteFromCard={plantToDeleteFromCard} newPlantState={newPlantState} newPriceFromPlantCard={newPriceFromPlantCard}/>
    </main>
  );
}

export default PlantPage;
