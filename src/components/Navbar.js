import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const amount = useSelector(state => state.amount);
    // console.log("State is :", amount);

    const isSignIn = useSelector(state => state.isSignIn);


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container ">
                    <a className="navbar-brand my-3 fs-3" href="/">Counter-Redux</a>

            {isSignIn?
                <div>
                    <p className="btn btn-success fs-4 my-2">Balance: {amount}</p>
                </div>
              : 
                    <button className="btn btn-primary" disabled={true}>Sign in to see Balance</button> 
                    }
                </div>
            </nav>
        </>
    )
}

export default Navbar
