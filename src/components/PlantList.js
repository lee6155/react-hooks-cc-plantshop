import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

function PlantList({plantState}) {
  let renderPlants = plantState.map(function(plant){
    return <PlantCard key={plant.id} image={plant.image} name={plant.name} price={plant.price}/>
  })
  
  return (
    <ul className="cards">
      {renderPlants}
    </ul>
  );
}

export default PlantList;
