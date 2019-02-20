import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Element from 'element-ui';
import Vuex from 'vuex';
Vue.use(Element, { size: 'small', zIndex: 3000 });
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
