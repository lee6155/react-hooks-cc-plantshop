import React, {useState} from "react";
import PlantCard from "./PlantCard"

function DeletePlant(){
    const [test, setTest] = useState("")

    function passDeleted(name) {
        setTest(name)
    }

    console.log(test)

    return(
        <div>
            
        </div>
    )
}

export default DeletePlant