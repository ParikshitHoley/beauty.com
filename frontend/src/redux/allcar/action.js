import axios from "axios";

export const ALLCAR = "ALLCAR";
export const LOADING = "LOADING";
export const ADDPAGE = "ADDPAGE";
export const SUBPAGE = "SUBPAGE";
export const GetAllCar = (type,payload)=>{
    return {
        type,payload
    }
}

export const GetCar=(page)=>async(dispatch)=>{
    let data = await fetch(`https://beautyindia.onrender.com/products?page=${page}`).then((res)=>res.json());
    dispatch(GetAllCar(ALLCAR,data))

}

export const GetFliterCar=(val)=>async(dispatch)=>{
    if(typeof val === "string")
    {
        let data = await fetch(`https://beautyindia.onrender.com/products/category/${val}`).then((res)=>res.json());
    dispatch(GetAllCar(ALLCAR,data))
    }

   else{
    let data = await fetch(`https://beautyindia.onrender.com/products/${val}`).then((res)=>res.json());
    dispatch(GetAllCar(ALLCAR,data))
   }

}

// export const GetSelectedCar=(val)=>async(dispatch)=>{
//     let data = await fetch(`http://localhost:5000/products/${val}`).then((res)=>res.json());
//     dispatch(GetAllCar(ALLCAR,data))

// }