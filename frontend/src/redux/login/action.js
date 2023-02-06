export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";
export const ERRORINSIGNUP = "ERRORINSIGNUP";
export const SIGNUPLOADING = "SIGNUPLOADING";
export const LOGINTRUE= "LOGINTRUE";
export const REMOVEERROR = "REMOVEERROR";
export const LOGOUT = "LOGOUT";


export const Signup=(form)=>async(dispatch)=>{
    console.log(form);
    dispatch(loginsignup(SIGNUPLOADING,true))
    let data = await fetch("http://localhost:5000/signup",{
        method: "POST",
        body: JSON.stringify(form),
        headers:{
            "content-type": "application/json"
        }

    }).then((res)=>res.json());

    if(data.error){
        dispatch(loginsignup(ERRORINSIGNUP,data))
    }
    else{
        dispatch(loginsignup(SIGNUP,data))
    }
    dispatch(loginsignup(SIGNUPLOADING,false))
}

export const Login=(form)=>async(dispatch)=>{
    console.log(form);
    dispatch(loginsignup(SIGNUPLOADING,true))
    try{
        let data = await fetch("https://beautyindia.onrender.com/login",{
            method: "POST",
        
            body: JSON.stringify(form),
            headers:{
                "content-type": "application/json"
            }
           
    
        }).then((res)=>res.json());
    
        if(data.error){
            
            dispatch(loginsignup(ERRORINSIGNUP,data))
          
        }
        dispatch(loginsignup(LOGIN,data))
        dispatch(loginsignup(SIGNUPLOADING,false))

    }
    catch(e)
    {
        dispatch(loginsignup(ERRORINSIGNUP,{error:true,message:e.message}))
        dispatch(loginsignup(SIGNUPLOADING,false))
    }
   
}

export const loginsignup =(type,payload)=>{
    return {
        type,payload
    }
}