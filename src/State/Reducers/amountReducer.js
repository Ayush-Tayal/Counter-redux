const reducer = (state=0, action)=>{
    if(action.type === "addition"){
        return state + action.payload;
    }

    else if(action.type === "subtraction"){
        return state - action.payload;
    }

    else{
        return state;
    }
}

export default reducer