import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

function PlantList({plantState}) {
  // const [plants, setPlants] = useState([])
  
  // useEffect(() => {
  //   fetch("http://localhost:6001/plants")
  //   .then(response => response.json())
  //   .then(data => setPlants(data))
  // },[])

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
