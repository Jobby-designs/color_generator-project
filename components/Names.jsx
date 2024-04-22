import React, { useState } from "react";

const Names = ({anything}) => {
    const [number, setNumber] = useState(0)
    const changeNumber = () => {
        setNumber(number +1)
    }
    const reduceNumber = () => {
        setNumber(number -1)
        if(number < 1){
            setNumber(0)
        }
    }
    const resetNumber = () => {
        setNumber(0)
    }
    return (
        <div>
            <p>COUNTER IS {number}</p>
            <button onClick={changeNumber}>increase counter</button>
            <button onClick={reduceNumber}>decrease counter</button>
            <button onClick={resetNumber}>reset counter</button>
        </div>
    )
}

export default Names;