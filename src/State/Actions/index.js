export const add = (data)=>{
    return (dispatch)=>{
        dispatch({
            type:"addition",
            payload:data 
        })
    }
}

export const subtract = (data)=>{
    return (dispatch)=>{
        dispatch({
            type:"subtraction",
            payload:data 
        })
    }
}