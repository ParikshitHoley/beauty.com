import { SINGLE,SINGLELOADING } from "./action";
const init ={
    data : {},
    loading : false

}



export const Singlereducer =(store=init,{type,payload})=>{
    switch(type){
        case SINGLE : return {loading : false , data : payload}
        case SINGLELOADING : return {data : {}, loading : true}
        default : return store
    }
}