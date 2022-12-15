import { json } from "react-router-dom";
import {SIGNUP,LOGIN,ERRORINSIGNUP,loginsignup,SIGNUPLOADING,LOGINTRUE,REMOVEERROR,LOGOUT} from "./action.js";

const init={
    singuploading:false,
    userid : null,
    token : null,
    email : null,
    name : null,
    error :false,
    message:null,
    login : false,
    signupsuccess:false,
    loginsuccess : false
}



export const LoginSignupReducer = (store = init,{type,payload})=>{
    switch(type){
        case LOGIN : return {...store,userid : payload.login._id,email : payload.login.email,error:false,name:payload.login.name,signupsuccess:true,loginsuccess:true,token:payload.token}
        case SIGNUP : return {...store , userid : payload.new_user._id,email : payload.new_user.email,error:false,message:"Congratulations ! , Please Login to Move Forward....",name:payload.new_user.name,signupsuccess:true}
        case SIGNUPLOADING : return {...store,singuploading:payload}
        case ERRORINSIGNUP : return {...store,error:payload.error,message:payload.message,signupsuccess:false,loginsucess:false}
        case LOGINTRUE : return {...store,signupsuccess : payload, error:false,loginsuccess:false}
        case REMOVEERROR :return {...store,error:false}
        case LOGOUT : return {...store,singuploading:false,
            userid : null,
            token : null,
            email : null,
            name : null,
            error :false,
            message:null,
            login : false,
            signupsuccess:false,
            loginsuccess : false}
        default : return store
    }

}

