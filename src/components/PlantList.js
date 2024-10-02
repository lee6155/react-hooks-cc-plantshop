import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

function PlantList({newPlantState, passDeleted2}) {
  let renderPlants = newPlantState.map(function(plant){
    return <PlantCard passDeleted={passDeleted} key={plant.id} id={plant.id} image={plant.image} name={plant.name} price={plant.price}/>
  })

  function passDeleted(idNumber) {
    newPlantState.forEach(function(plant){
      if(plant.id === idNumber) {
        fetch(`http://localhost:6001/plants/${plant.id}`, {
          method: "DELETE",
        })
        .then(response => response.json())
        .then(function(data) {
          passDeleted2(data)
        })
      }
    })
  }
  
  return (
    <ul className="cards">
      {renderPlants}
    </ul>
  );
}

export default PlantList;
