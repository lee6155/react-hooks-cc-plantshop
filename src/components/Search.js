import React from "react";

function Search({passFiltered, plantState}) {
  function handleChange(event) {
    let text = event.target.value
    let newPlantState = []
    plantState.filter(function(plant){
      const plantInput = plant.name.substring(0, text.length)
      if(plantInput.toLowerCase() === text.toLowerCase()) {
        return newPlantState.push(plant)
      }
    })
    passFiltered(newPlantState)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input onChange={handleChange}
        type="text"
        id="search"
        placeholder="Type a name to search..."
        //onChange={(e) => console.log("Searching...")}
      />
    </div>
  );
}

export default Search;
