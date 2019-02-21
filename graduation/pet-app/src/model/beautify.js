import {addBeautify,removeBeautify,updateBeautify,getBeautifyByPageAsync} from '../services/beautify'
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
      getBeautifyByPage:(state,payload)=>{
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
      getBeautifyByPageAsync:async ({commit,state})=>{
        const {data} = await getBeautifyByPageAsync({
            currentPage:state.currentPage,
            eachPage:state.eachPage
        });
        commit('getBeautifyByPage',data)
    },
    addBeautyAsync: async ({dispatch},payload)=>{
        await addBeautify(payload);
        dispatch('getBeautifyByPageAsync')
    },
    updateBeautyAsync: async ({dispatch},{_id,kind,fit,price,schedule})=>{
        await updateBeautify({_id,kind,fit,price,schedule});
        dispatch('getBeautifyByPageAsync')
    },
    removeBeautyAsync: async ({dispatch},_id)=>{
        await removeBeautify(_id);
        dispatch('getBeautifyByPageAsync')
    }
    }
  };
  