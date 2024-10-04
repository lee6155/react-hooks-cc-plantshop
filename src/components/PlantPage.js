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
    
  function passNewPlant(newPlant) {
    return setPlantState([...plantState, newPlant])
  }

  function sendToPlantPage(updatedPlantInfo) {
    let updatedPlantArray = plantState.map(function(plant){
      if(plant.id === updatedPlantInfo.id) {
        return updatedPlantInfo
      } else {
        return plant
      }
    })

    setPlantState(updatedPlantArray)
  }

  function passDeleted2(deletedPlant) {
    let plantsExclDeleted = plantState.filter(function(plant) {
      return plant.id !== deletedPlant.id
    })

    setPlantState(plantsExclDeleted)
  }

  return (
    <main>
      <NewPlantForm passNewPlant={passNewPlant}/>
      <Search passFiltered={setSearch}/>
      <PlantList passDeleted2={passDeleted2} newPlantState={newPlantState} sendToPlantPage={sendToPlantPage}/>
    </main>
  );
}

export default PlantPage;
