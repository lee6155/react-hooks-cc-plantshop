import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

function PlantList({ newPlantState, newPriceFromPlantCard, plantToDeleteFromCard }) {
  let renderPlants = newPlantState.map(function(plant){
    return <PlantCard plantToDeleteFromCard={plantToDeleteFromCard} newPriceFromPlantCard={newPriceFromPlantCard} key={plant.id} id={plant.id} image={plant.image} name={plant.name} price={plant.price}/>
  })
  
  return (
    <ul className="cards">
      {renderPlants}
    </ul>
  );
}

export default PlantList;
