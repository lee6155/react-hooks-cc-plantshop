import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

function PlantList({ newPlantState, passDeleted2, sendToPlantPage }) {
  let renderPlants = newPlantState.map(function(plant){
    return <PlantCard passDeleted={passDeleted} sendToPlantPage={sendToPlantPage} key={plant.id} id={plant.id} image={plant.image} name={plant.name} price={plant.price}/>
  })

  // put where passDeleted2 is
  function passDeleted(idNumber) {
    fetch(`http://localhost:6001/plants/${idNumber}`, {
      method: "DELETE",
    })
    .then(response => response.json())
    .then(function(data) {
    passDeleted2(data)
    })
  }
  
  return (
    <ul className="cards">
      {renderPlants}
    </ul>
  );
}

export default PlantList;
