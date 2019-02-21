import {
    addStorefrontAsync,getStorefrontByPageAsync,updateStorefrontAsync,removeStorefrontAsync
} from '../services/storefront';
import {getAllStaffDataAsync} from '../services/staff';
export default {
    namespaced: true,
    state: {
        count:0,
        totalPage:0,
        eachPage:10,
        currentPage:1,
        data:[],
        staffData:[],
    },
    mutations: {

        //    checkLogin:(state,payload) => {
        //        Object.assign(state,{isLogin:payload})
        //    }
        getStorefrontByPage: (state, payload) => {
            Object.assign(state, payload)
        },
        setCurrentPage: (state, currentPage) => {
            console.log(currentPage)
            state.currentPage = currentPage
        },
        setEachPage: (state, eachPage) => {
            state.eachPage = eachPage
        },
        getAllStorefrontData: (state, payload) => {
            Object.assign(state, {staffData:payload})
        },
    },
    actions: {
        addStorefrontAsync: async ({
            commit,
            state
        }, payload) => {
            const {
                data
            } = await addStorefrontAsync({
                newStorefront: payload
            })
            console.log(data)
        },
        getStorefrontByPageAsync:async({commit,state},payload) => {
            const {
                data
            } = await getStorefrontByPageAsync({
                currentPage : state.currentPage,
                eachPage : state.eachPage,
                usersId:payload
            })
            console.log(data);
            commit("getStorefrontByPage", data)
        },
        updateStorefrontAsync:async({commit,state},payload) => {
            const{data} = await updateStorefrontAsync({
                newStorefront:payload
            })
            console.log(data);
        },
        removeStorefrontAsync:async({commit,state},payload) => {
              const {data} = await removeStorefrontAsync({
                  id:payload
              })
              console.log(data);
        },
        getAllStaffDataAsync:async({commit,state},payload) => {
            const {data} = await getAllStaffDataAsync({
                usersId:payload
            })
           commit("getAllStorefrontData",data)
        }



    }
}