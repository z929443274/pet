import Vue from 'vue'
import Vuex from 'vuex'
import Users from './model/users'
<<<<<<< HEAD
import PetOwner from './model/petOwner'
=======
import beautify from './model/beautify'
import trusteeship from './model/trusteeship'
import toy from "./model/toy";
import food from './model/food';
import shower from './model/shower';


>>>>>>> 1fab00bf5a62c0c220c0e18957e7143099248351
Vue.use(Vuex)


export default new Vuex.Store({
  modules:{
<<<<<<< HEAD
    Users,PetOwner
=======
    Users,
    beautify,
    trusteeship,
    toy,
    food,
    shower
>>>>>>> 1fab00bf5a62c0c220c0e18957e7143099248351
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
