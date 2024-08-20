import React, { useState } from "react";

function UpdatePrice ({ passNewPrice, plantState }) {
    const [newPrice, setNewPrice] = useState({
        name: "",
        price: 0
    })
        
    function handleChange (event) {
        setNewPrice({
            ...newPrice,
            [event.target.name]: event.target.value
        })
    }
        
    function handleSubmit (event) {
        event.preventDefault()
        const newPrice2 = {
            name: newPrice.name,
            price: newPrice.price
        }
        
        plantState.forEach(function(plant){
            if(plant.name.toLowerCase() === newPrice2.name.toLowerCase()) {
                fetch(`http://localhost:6001/plants/${plant.id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "Application/JSON"
                    },
                    body: {
                        "name": "string",
                        "price": "number"
                    },
                    body: JSON.stringify(newPrice2)
                })
                .then(response => response.json())
                .then(function(data){
                    let plantState2 = []
                    plantState.forEach(function(plant){
                        if(plant.id !== data.id) {
                            return plantState2.push(plant)
                        } else {
                            return plantState2.push(data)
                        }
                    })
                    passNewPrice(plantState2)
                })
            }
        })
    }

    return (
        <div className="new-plant-form">
            <h2>Update Plant Price</h2>
            <form onChange={handleChange} onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Plant Name" />
                <input type="number" name="price" step="0.01" placeholder="price" />
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default UpdatePrice