import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDogData } from '../State/Actions';


const Api = () => {
    const dispatch = useDispatch();
    const dogData = useSelector(state => state.dogData);

    function handleFetchClick(){
        dispatch(fetchDogData());
    }


    return (
        <>
        <div className="text-center">
            <button className="btn btn-success" onClick={handleFetchClick}>Fetch dog </button>  
            <br/> 
            <img className="my-4" src={dogData} />
        </div>
        </>
    )
}

export default Api
