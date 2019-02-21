import {getOwnerByPageAsync,addOwnerAsync} from '../services/petOwner'
export default {
    namespaced:true,
    state:{
        pageSize:1,
        eachPage:5,
        maxPage:1,
        total:0,
        rows:[]

    },
    mutations:{
        getOwnerByPage:(state,payload)=>{
            console.log(state)
            Object.assign(state,payload)
        }
    },
    actions:{
        getOwnerByPageAsync:async({commit})=>{
            const{data}=await getOwnerByPageAsync();
            console.log(data)
            commit("getOwnerByPage",data)
        },
        addOwnerAsync:async({dispath},payload) => {
            await addOwnerAsync(payload);
            console.log(payload);
            
        },
           
    
    }
}