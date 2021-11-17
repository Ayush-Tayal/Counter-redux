import React from 'react'
import { useSelector } from 'react-redux'

const Counter = () => {
    const amount = useSelector(state => state.amount)
    return (
        <div className="text-center my-5">
            <h1>Counter: {amount}</h1>
        </div>
    )
}

export default Counter
