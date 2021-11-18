import { combineReducers } from "redux";
import amountReducer from './amountReducer';
import signIn from './isSignIn'

const reducers = combineReducers({
    amount:amountReducer,
    isSignIn:signIn
})


export default reducers;