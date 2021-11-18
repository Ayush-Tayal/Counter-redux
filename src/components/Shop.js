import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, subtract, signIn, signOut } from '../State/Actions';

const Shop = () => {
    const dispatch = useDispatch();
    const [inputVal, setInputVal] = useState("")
    // console.log("Input value is ", inputVal);

    function handleAddAmount() {
        dispatch(add(parseInt(inputVal)));
    }   

    function handleSubAmount() {
        dispatch(subtract(parseInt(inputVal)));
    }   

    function handleSignIN(){
        dispatch(signIn());
        // console.log("Sign IN clicked")
    }

    function handleSignOut(){
        dispatch(signOut());
        // console.log("Sign out clicked")
    }

    const amount = useSelector(state => state.amount)

    const isSignIn = useSelector(state => state.isSignIn);
    // console.log("sign in state",isSignIn);

    return (
        <>
        {isSignIn?
        <div className="text-center">
            <h1 className="my-5">Counter: {amount}</h1>

            <div className="text-center fs-5">
                <button className="btn btn-primary mx-3" onClick={handleSubAmount}>Sub amount</button>
                <input type="number" placeholder="Enter the amount" onChange={(e)=>{setInputVal(e.target.value)}}></input>
                <button className="btn btn-primary mx-3" onClick={handleAddAmount}>Add amount</button>

            </div>

            <div className="text-center my-5 fs-3">
                <button className="btn btn-primary mx-4" onClick={()=>{dispatch(subtract(1))}}>-</button>
                    Click to subtract or add
                <button className="btn btn-primary mx-4" onClick={()=>{dispatch(add(1))}}>+</button>
            </div>

            <button className="btn btn-primary my-4" onClick={handleSignOut}>Sign Out</button>
        </div> :
        
        <div className="text-center">
            <button className="btn btn-primary my-5" onClick={handleSignIN}>Sign IN</button>
        </div> }
    </>
    )
}

export default Shop
