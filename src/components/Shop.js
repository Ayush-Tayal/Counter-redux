import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add, subtract } from '../State/Actions';

const Shop = () => {
    const dispatch = useDispatch();
    const [inputVal, setInputVal] = useState("")
    // console.log("Input value is ", inputVal);

    function handleAddAmount() {
        dispatch(add(parseInt(inputVal)));
    }   


    return (
        <>
        <div className="text-center fs-5">
            <input type="number" placeholder="Enter the amount" onChange={(e)=>{setInputVal(e.target.value)}}></input>
            <button className="btn btn-primary mx-3" onClick={handleAddAmount}>Add amount</button>

        </div>

        <div className="text-center my-5 fs-3">
            <button className="btn btn-primary mx-4" onClick={()=>{dispatch(subtract(1))}}>-</button>
                Click to subtract or add
            <button className="btn btn-primary mx-4" onClick={()=>{dispatch(add(1))}}>+</button>
        </div>

    </>
    )
}

export default Shop
