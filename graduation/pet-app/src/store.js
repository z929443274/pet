import Vue from 'vue'
import Vuex from 'vuex'
import Users from './model/users'
import beautify from './model/beautify'
import trusteeship from './model/trusteeship'
import toy from "./model/toy";
import food from './model/food';
import shower from './model/shower';


Vue.use(Vuex)


export default new Vuex.Store({
  modules:{
    Users,
    beautify,
    trusteeship,
    toy,
    food,
    shower
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
