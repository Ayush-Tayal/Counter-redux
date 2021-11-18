export const add = (data)=>{
    return{
        type:"addition",
        payload:data 
    }
}

export const subtract = (data)=>{
    return{
        type:"subtraction",
        payload:data 
    }
}

export const signIn = ()=>{
    return {
        type:"signIn"
    }
}

export const signOut = ()=>{
    return{
        type:"signOut"
    }
}

export const fetchDogData=()=>{
    return async (dispatch)=>{
        const data = await fetch("https://dog.ceo/api/breeds/image/random");
        const response = await data.json();
        console.log("response is", response);
        dispatch(saveDogData(response.message));
    }
}

export const saveDogData=(data)=>{
    return {
        type:"dogImage",
        payload:data
    }
}


// const INCREAMETN_COUNT = "addition"