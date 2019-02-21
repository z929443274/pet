import {getOwnerByPageAsync,addOwnerAsync} from '../services/petOwner'
export default {
    namespaced:true,
    state:{
        pageSize:1,
        eachPage:3,
        maxPage:1,
        total:0,
        rows:[]

    },
    mutations:{
        setSize:(state,payload)=>{
            state.pageSize=payload
        },
        setEach:(state,payload)=>{
            state.eachPage=payload
        },
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