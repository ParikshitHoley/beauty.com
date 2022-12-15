import {ADDTOCART,ADDTOCARTLOADING} from "./action";
const init={cartdata:[],
addloading:false};
export const AddToCartReducer =(store=init,{type,payload})=>{
    switch(type){
        case ADDTOCART : return [...store,payload]
        case ADDTOCARTLOADING : return {...store,addloading:payload}
        
        default : return store
    }
}