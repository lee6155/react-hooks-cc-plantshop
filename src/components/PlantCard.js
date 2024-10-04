import React, { useState } from "react";

function PlantCard({ id, image, name, price, passDeleted, sendToPlantPage}) {
  const [button, setButton] = useState(true)
  const [newPrice, setNewPrice] = useState(price)

  function handleClick(event){
    return setButton(!true)
  }

  function handleClick2(){
    passDeleted(id)
  }
      
  function handleChangePrice (event) {
    setNewPrice(event.target.value)
  }
      
  function handleSubmit (event) {
    event.preventDefault()
    const newPriceObj = {
      name: name,
      price: newPrice
    }
  
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPriceObj)
      })
      .then(response => response.json())
      .then(data => sendToPlantPage(data))
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
      <button onClick={handleClick2}>Delete</button>
      <h4 id="updatePriceHeading">Update Plant Price</h4>
          <form onSubmit={handleSubmit}>
              <input type="number" name="price" step="0.01" placeholder="price" value={newPrice} onChange={handleChangePrice}/>
              <button type="submit">Update</button>
          </form>
    </li>
  );
}

export default PlantCard;
