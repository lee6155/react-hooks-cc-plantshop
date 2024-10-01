import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import UpdatePrice from "./UpdatePrice"

function PlantPage() {
  const [plantState, setPlantState] = useState([])
  const [search, setSearch] = useState("")

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

  function passPlantWithNewPrice(newPlant) {
    let plantsUpdatedPrice = plantState.map(function(plant){
      if(plant.id === newPlant.id) {
        return newPlant
      } else {
        return plant
      }
    })

    setPlantState(plantsUpdatedPrice)
  }

  function passDeleted2(state) {
    setPlantState(state)
  }

  return (
    <main>
      <NewPlantForm passNewPlant={passNewPlant}/>
      <Search passFiltered={setSearch}/>
      <PlantList passDeleted2={passDeleted2} newPlantState={newPlantState}/>
      <UpdatePrice passPlantWithNewPrice={passPlantWithNewPrice} plantState={plantState}/>
    </main>
  );
}

export default PlantPage;
