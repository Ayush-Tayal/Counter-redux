const dogData = (state="" , action)=>{
    if(action.type==="dogImage"){
        return action.payload;
    }

    else{
        return state;
    }
}

export default dogData;