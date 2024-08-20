import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import UpdatePrice from "./UpdatePrice"

function PlantPage() {
  const [plantState, setPlantState] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(response => response.json())
    .then(data => setPlantState(data))
  },[])

  function passNewPlant(newPlant) {
    return setPlantState([...plantState, newPlant])
  }

  function passFiltered(state) {
    setPlantState(state)
  }

  function passNewPrice(state) {
    setPlantState(state)
  }


  function passDeleted2(state) {
    setPlantState(state)
  }

  return (
    <main>
      <NewPlantForm passNewPlant={passNewPlant}/>
      <Search passFiltered={passFiltered} plantState={plantState}/>
      <PlantList plantState={plantState} passDeleted2={passDeleted2}/>
      <UpdatePrice passNewPrice={passNewPrice} plantState={plantState}/>
    </main>
  );
}

export default PlantPage;
