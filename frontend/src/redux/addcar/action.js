export const ADDTOCART ="ADDTOCART";
export const ADDTOCARTLOADING = "ADDTOCARTLOADING";
export const Addproduct=(type,payload)=>{
    return {
        type,payload
    }
}

export const AddToCart =(form,token)=>async(dispatch)=>{
    try{
        dispatch(Addproduct(ADDTOCARTLOADING,true))
    let data = await fetch("https://beautyindia.onrender.com/cart",{
        method : "POST",
        body : JSON.stringify(form),
        headers : {
            "content-type": "application/json",
            authorization : "Bearer " + token
        }
    
    })
      dispatch(Addproduct(ADDTOCART,data));  
      dispatch(Addproduct(ADDTOCARTLOADING,false))

    }
    catch(e)
    {
        dispatch(Addproduct(ADDTOCARTLOADING,false))
        console.log(e.message,"error in addto cart api")
    }
}