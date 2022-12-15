import axios from "axios"
export const SINGLE ="SINGLE";
export const SINGLELOADING = "SINGLELOADING";

export const Singleaction=(type,payload)=>{
    return {
        type,payload
    }
}

export const GetSingleData=(id)=>async(dispatch)=>{
   axios.get(`http://localhost:5000/products/single/${id}`).then(({data})=>dispatch(Singleaction(SINGLE,data)))
   
//    dispatch(Singleaction(SINGLE,data))
}