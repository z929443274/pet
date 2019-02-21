import { getFoodByPageAsync, delFood, addFood, updateFood } from '../services/food';

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

    getFoodByPage:(state,payload)=>{
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
    getFoodByPageAsync:async ({commit,state})=>{
        const {data} = await getFoodByPageAsync({
            currentPage:state.currentPage,
            eachPage:state.eachPage
        })
        commit('getFoodByPage',data)
    },
    addFoodAsync:async ({dispatch},payload)=>{
        await addFood(payload);
        dispatch("getFoodByPageAsync")
    },
    delFoodAsync:async ({dispatch},_id)=>{
        await delFood(_id);
        dispatch('getFoodByPageAsync')
    },
    updateFoodAsync:async ({dispatch},{_id,name,shape,fit,taste,packing,impact,date,expirationDate,place,price,supplier,count})=>{
        await updateFood({_id,name,shape,fit,taste,packing,impact,date,expirationDate,place,price,supplier,count});
        dispatch('getFoodByPageAsync')
    }
  }
};
