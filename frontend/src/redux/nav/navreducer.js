import { TOGGLEBAR } from "./action";

const init={
    showbar:false

}
 export const NavReducer =(store=init,{type,payload})=>{
    switch(type){
        case TOGGLEBAR : return {...store,showbar : payload }
        default : return store;
    }
}