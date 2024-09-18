import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

function PlantList({newPlantState, passDeleted2}) {
  let renderPlants = newPlantState.map(function(plant){
    return <PlantCard passDeleted={passDeleted} key={plant.id} image={plant.image} name={plant.name} price={plant.price}/>
  })

  function passDeleted(name) {
    newPlantState.forEach(function(plant){
      if(plant.name === name) {
        fetch(`http://localhost:6001/plants/${plant.id}`, {
          method: "DELETE",
        })
        .then(response => response.json())
        .then(function() {
          let plantState2 = []
          newPlantState.forEach(function(plant){
              if(plant.name !== name) {
                  return plantState2.push(plant)
              }
          })
          passDeleted2(plantState2)
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
