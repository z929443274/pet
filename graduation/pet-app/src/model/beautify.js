import {addBeautify,removeBeautify,updateBeautify,getBeautifyByPageAsync} from '../services/beautify'
export default {
    namespaced: true,
    state: {
      currentPage:1,  //当前页
      eachPage:3, //每页显示条数
      totalPage:0, //总页数
      count:0, //数量
      data:[], //数据

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
  