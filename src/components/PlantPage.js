import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(response => response.json())
    .then(data => setPlants(data))
  },[])

  const newPlantState = plants.filter(function(plant){
    return plant.name.toLowerCase().includes(search.toLowerCase())
  })
    
  function newPlantFromInput(newPlant) {
    return setPlants([...plants, newPlant])
  }

  function newPriceFromPlantCard(updatedPlantInfo) {
    let updatedPlantArray = plants.map(function(plant){
      if(plant.id === updatedPlantInfo.id) {
        return updatedPlantInfo
      } else {
        return plant
      }
    })

    setPlants(updatedPlantArray)
  }

  function plantToDeleteFromCard(idNumber) {
    fetch(`http://localhost:6001/plants/${idNumber}`, {
      method: "DELETE",
    })
    .then(response => response.json())
    .then(function(data) {
      let plantArrayExclDeleted = plants.filter(function(plant) {
        return plant.id !== data.id
      })
      setPlants(plantArrayExclDeleted)
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
