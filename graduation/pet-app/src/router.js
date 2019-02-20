import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import Info from './views/Info.vue'
import ElementUI from 'element-ui';
import List from './components/petOwner/List.vue';
import AddOwner from './components/petOwner/AddOwner.vue';

Vue.use(Router)
Vue.use(ElementUI)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login/:userName',
      name: '_Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Info',
      name: 'Info',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Info.vue'),
      children:[
        {
          path:'List',
          name:'List',
          component: () => import(/* webpackChunkName: "about" */ './components/petOwner/List.vue'),
        },
        {
          path:'AddOwner',
          name:'AddOwner',
          component: () => import(/* webpackChunkName: "about" */ './components/petOwner/AddOwner.vue'),
        }
      ]
    }
  ]
})
