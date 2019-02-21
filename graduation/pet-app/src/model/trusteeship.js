import {addTrusteeship,updateTrusteeship,removeTrusteeship,getTrusteeshipByPageAsync} from '../services/trusteeship'
export default {
    namespaced: true,
    state: {
      currentPage:1,  
      eachPage:5,
      totalPage:0,
      count:0,
      data:[],
    },
    mutations: {
      getTrusteeshipByPage:(state,payload)=>{
          console.log(payload);
        Object.assign(state,payload)
    },
    setCurPage:(state,currentPage)=>{
        state.currentPage = currentPage
    },
    setEachPage:(state,eachPage)=>{
        state.eachPage = eachPage
    },
    },
 
    actions: {
      getTrusteeshipByPageAsync:async ({commit,state})=>{
        const {data} = await getTrusteeshipByPageAsync({
            currentPage:state.currentPage,
            eachPage:state.eachPage
        });
        commit('getTrusteeshipByPage',data)
    },
    addTrustAsync: async ({dispatch},payload)=>{
        await addTrusteeship(payload);
        dispatch('getTrusteeshipByPageAsync')
    },
    updateTrustAsync: async ({dispatch},{_id,kind,fit,price,schedule})=>{
        await updateTrusteeship({_id,kind,fit,price,schedule});
        dispatch('getTrusteeshipByPageAsync')
    },
    removeTrustAsync: async ({dispatch},_id)=>{
        await removeTrusteeship(_id);
        dispatch('getTrusteeshipByPageAsync')
    }
    }
  };
  