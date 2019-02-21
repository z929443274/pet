import { getToyByPageAsync, delToy, addToy, updateToy } from '../services/toy';

export default {
  namespaced: true,
  state: {
    currentPage: 1, //当前页
    eachPage: 3, //每页显示条数
    totalNum: 0, //总条数
    totalPage: 0, //总页数
    data: [], //数据
  },
  mutations: {

    getToyByPage:(state,payload)=>{
        Object.assign(state,payload)
    },

  //设置当前页
    setCurPage:(state,currentPage)=>{
        state.currentPage = currentPage
    },

  //设置每页显示  
    setEachPage:(state,eachPage)=>{
        state.eachPage = eachPage
    },
  },
  actions: {
    getToyByPageAsync:async ({commit,state})=>{
        const {data} = await getToyByPageAsync({
            currentPage:state.currentPage,
            eachPage:state.eachPage
        })
        commit('getToyByPage',data)
    },
    addToyAsync:async ({dispatch},payload)=>{
        await addToy(payload);
        dispatch("getToyByPageAsync")
    },
    delToyAsync:async ({dispatch},_id)=>{
        await delToy(_id);
        dispatch('getToyByPageAsync')
    },
    updateToyAsync:async ({dispatch},{_id,name,texture,fit,impact,place,price,supplier,count})=>{
        await updateToy({_id,name,texture,fit,impact,place,price,supplier,count});
        dispatch('getToyByPageAsync')
    }
  }
};
