import React, {useState} from "react";

function NewPlantForm({passNewPlant}) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")

  function handleChangeName (event) {
    setName(event.target.value)
  }

  function handleChangeImage (event) {
    setImage(event.target.value)
  }

  function handleChangePrice (event) {
    setPrice(event.target.value)
  }

  function handleSubmit (event) {
    event.preventDefault()
    const formInfo = {
      name: name,
      image: image,
      price: price
    }

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON"
      },
      body: {
        "name": "string",
        "image": "string",
        "price": "number"
      },
      body: JSON.stringify(formInfo)
    })
    .then(response => response.json())
    .then(data => passNewPlant(data))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={name} onChange={handleChangeName}/>
        <input type="text" name="image" placeholder="Image URL" value={image} onChange={handleChangeImage}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={price} onChange={handleChangePrice}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
