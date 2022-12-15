import {ALLCAR,LOADING,ADDPAGE,SUBPAGE} from "./action"
const init={
    data : [],
    loading : false,
    page:1
}

export const AllCarReducer=(store=init,{type,payload})=>{
    switch(type){
        case ALLCAR : return {...store,data:payload,loading:false}
        case LOADING : return {...store,loading:payload}
        case ADDPAGE : return {...store,page:store.page-1}
        case SUBPAGE : return {...store,page:store.page+1}
        default: return store
    }
}