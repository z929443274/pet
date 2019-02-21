import {getOwnerByPageAsync,addOwnerAsync} from '../services/petOwner'
export default {
    namespaced:true,
    state:{
        curPage:1,
        eachPage:3,
        maxPage:1,
        total:0,
        rows:[]

    },
    mutations:{
        setSize:(state,payload)=>{
            state.curPage=payload
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
        getOwnerByPageAsync:async({commit,state})=>{
            const{data}=await getOwnerByPageAsync({
                curPage:state.curPage,
                eachPage:state.eachPage
            });
            console.log(data)
            commit("getOwnerByPage",data)
        },
        setSizeTrans:async({commit,dispatch},payload)=>{
            commit("setSize",payload);
            dispatch("getOwnerByPageAsync")
        },
        setEachTrans:async({commit,dispatch},payload)=>{
            commit("setEach",payload);
            dispatch("getOwnerByPageAsync")
        },
        addOwnerAsync:async({dispath},payload) => {
            await addOwnerAsync(payload);
            console.log(payload);
            
        },
           
    
    }
}