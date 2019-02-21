import { getShowerByPageAsync, delShower, addShower, updateShower } from '../services/shower';

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

    getShowerByPage:(state,payload)=>{
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
    getShowerByPageAsync:async ({commit,state})=>{
        const {data} = await getShowerByPageAsync({
            currentPage:state.currentPage,
            eachPage:state.eachPage
        })
        commit('getShowerByPage',data)
    },
    addShowerAsync:async ({dispatch},payload)=>{
        await addShower(payload);
        dispatch("getShowerByPageAsync")
    },
    delShowerAsync:async ({dispatch},_id)=>{
        await delShower(_id);
        dispatch('getShowerByPageAsync')
    },
    updateShowerAsync:async ({dispatch},{_id,name,fit,packing,impact,date,expirationDate,place,price,supplier,count})=>{
        await updateShower({_id,name,fit,packing,impact,date,expirationDate,place,price,supplier,count});
        dispatch('getShowerByPageAsync')
    }
  }
};
