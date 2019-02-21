import Vue from 'vue'
import Vuex from 'vuex'
import Users from './model/users'
import PetOwner from './model/petOwner'
Vue.use(Vuex)


export default new Vuex.Store({
  modules:{
    Users,PetOwner
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
