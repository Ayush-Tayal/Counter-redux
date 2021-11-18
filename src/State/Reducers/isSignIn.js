
const signIn=(state = false, action)=>{
    if(action.type==="signIn"){
        return true;
    }
    
    else if(action.type==="signOut"){
        return false;
    }

    else{
        return state;
    }

}

export default signIn