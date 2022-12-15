import {legacy_createStore ,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { NavReducer} from "./nav/navreducer"
import { SearchReducer } from "./searchcar/searchreducer";
import { AllCarReducer } from "./allcar/allCarReducer";
import {LoginSignupReducer} from "./login/loginreducer"
import { Singlereducer } from "./Single/singlereducer";
import { AddToCartReducer } from "./addcar/addflatreducer";
const RootReducer =combineReducers({
    nav : NavReducer,
    search : SearchReducer,
    allcar : AllCarReducer,
    auth : LoginSignupReducer,
    single : Singlereducer,
    cart : AddToCartReducer
})

// export const middleware=(store)=>(next)=>(action)=>{
//     if(typeof action==="function")
//     {
//         return action();
//     }
//     return next(action);
// }

export const store = legacy_createStore(RootReducer,applyMiddleware(thunk))
