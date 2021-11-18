import { combineReducers } from "redux";
import amountReducer from './amountReducer';
import signIn from './isSignIn';
import dog from './dog';

const reducers = combineReducers({
    amount:amountReducer,
    isSignIn:signIn,
    dogData:dog,
})


export default reducers;