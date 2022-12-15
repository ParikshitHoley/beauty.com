import {SEARCH,ERROR,LOADINGSEARCH} from "./action";
const init = {
    searchdata : [],
    error:false,
    loading:false
}
export const SearchReducer=(store=init,{type,payload})=>{
    switch(type){
        case SEARCH : return {...store,searchdata:payload,error:false,loading:false}
        case ERROR : return {...store,searchdata:[],error:true,loading:false}
        case LOADINGSEARCH : return {...store,searchdata:[],loading:payload,error:false}
        default : return store;
    }
}