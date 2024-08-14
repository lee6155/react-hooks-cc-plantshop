import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

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

  return (
    <main>
      <NewPlantForm passNewPlant={passNewPlant}/>
      <Search />
      <PlantList plantState={plantState}/>
    </main>
  );
}

export default PlantPage;
