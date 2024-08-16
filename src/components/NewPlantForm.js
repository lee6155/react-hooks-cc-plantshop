import React, {useState} from "react";

function NewPlantForm({passNewPlant}) {
  const [formInfo, setFormInfo] = useState({
    name: "",
    image: "",
    price: 0
  })

  function handleChange (event) {
    setFormInfo({
      ...formInfo,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit (event) {
    event.preventDefault()
    const formInfo2 = {
      name: formInfo.name,
      image: formInfo.image,
      price: formInfo.price
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
      body: JSON.stringify(formInfo2)
    })
    .then(response => response.json())
    .then(data => passNewPlant(data))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
