import Vue from 'vue'
import Vuex from 'vuex'
import Users from './model/users'
import beautify from './model/beautify'
import trusteeship from './model/trusteeship'

Vue.use(Vuex)


export default new Vuex.Store({
  modules:{
    Users,
    beautify,
    trusteeship,
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
