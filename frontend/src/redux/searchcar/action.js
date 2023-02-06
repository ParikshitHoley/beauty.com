import axios from "axios";

export const SEARCH ="SEARCH";
export const ERROR = "ERROR"
export const LOADINGSEARCH = "LOADINGSEARCH";
export const searchaction=(type,payload)=>{
    return {type,payload};
}

export const search=(text)=>async(dispatch)=>{
    try{
        dispatch(searchaction(LOADINGSEARCH,true))
         const data= await fetch(`https://beautyindia.onrender.com/products/search/${text}`).then((res)=>res.json());
         dispatch(searchaction(SEARCH,data))
    }
    catch(e){
        dispatch(searchaction(ERROR,true))
        console.log(e.message,"pav")
    }
}