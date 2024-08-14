import React, { useState } from "react";

function PlantCard({ image, name, price }) {
  const [button, setButton] = useState(true)

  function handleClick(event){
    return setButton(!true)
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {button ? (
      //button above was originally just true
        <button onClick={handleClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
