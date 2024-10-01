import React, { useState } from "react";

function UpdatePrice ({ passPlantWithNewPrice, plantState }) {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
        
    function handleChangeName (event) {
        setName(event.target.value)
    }

    function handleChangePrice (event) {
        setPrice(event.target.value)
    }
        
    function handleSubmit (event) {
        event.preventDefault()
        const newPrice = {
            name: name,
            price: price
        }
        
        plantState.forEach(function(plant){
            if(plant.name.toLowerCase() === name.toLowerCase()) {
                fetch(`http://localhost:6001/plants/${plant.id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newPrice)
                })
                .then(response => response.json())
                .then(data => passPlantWithNewPrice(data))

                // .then(function(data){
                //     let plantState2 = []
                //     plantState.forEach(function(plant){
                //         if(plant.id !== data.id) {
                //             return plantState2.push(plant)
                //         } else {
                //             return plantState2.push(data)
                //         }
                //     })
                //     passNewPrice(plantState2)
                // })
            }
        })
    }

    return (
        <div className="new-plant-form">
            <h2>Update Plant Price</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Plant Name" value={name} onChange={handleChangeName}/>
                <input type="number" name="price" step="0.01" placeholder="price" value={price} onChange={handleChangePrice}/>
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default UpdatePrice