import {addStaffAsync,getStaffByPageAsync,removeStaffAsync,updateStaffAsync,getAllStaffDataAsync} from '../services/staff';
export default {
    namespaced: true,
    state: {
        count:0,
        totalPage:0,
        eachPage:10,
        currentPage:1,
        data:[]
    },
    mutations: {
        getStaffByPage: (state, payload) => {
            Object.assign(state, payload)
        },
        setCurrentPage: (state, currentPage) => {
            console.log(currentPage)
            state.currentPage = currentPage
        },
        setEachPage: (state, eachPage) => {
            state.eachPage = eachPage
        }
    },
    actions: {
        addStaffAsync: async ({
            commit,
            state
        }, payload) => {
            const {
                data
            } = await addStaffAsync({
                newStaff: payload
            })
            console.log(data)
        },
        getStaffByPageAsync:async({commit,state},payload) => {
            console.log(payload)
            const {
                data
            } = await getStaffByPageAsync({
                currentPage : state.currentPage,
                eachPage : state.eachPage,
                usersId:payload
            })
            console.log(data);
            commit("getStaffByPage", data)
        },
        updateStaffAsync:async({commit,state},payload) => {
            const{data} = await updateStaffAsync({
                newStaff:payload
            })
            console.log(data);
        },
        removeStaffAsync:async({commit,state},payload) => {
              const {data} = await removeStaffAsync({
                  id:payload
              })
              console.log(data);
        },
       
    }
}