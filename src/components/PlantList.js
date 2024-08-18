import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

function PlantList({plantState, passDeleted2}) {
  let renderPlants = plantState.map(function(plant){
    return <PlantCard passDeleted={passDeleted} key={plant.id} image={plant.image} name={plant.name} price={plant.price}/>
  })

  function passDeleted(name) {
    plantState.forEach(function(plant){
      if(plant.name === name) {
        fetch(`http://localhost:6001/plants/${plant.id}`, {
          method: "DELETE",
        })
        .then(response => response.json())
        .then(function() {
          let plantState2 = []
          plantState.forEach(function(plant){
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
