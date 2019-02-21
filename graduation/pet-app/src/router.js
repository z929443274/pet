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
          path: 'toy',
          name: 'Toy',
          component: () => import(/* webpackChunkName: "about" */ './components/toy/toy.vue')
        },
        {
          path: 'addToy',
          name: 'AddToy',
          component: () => import(/* webpackChunkName: "about" */ './components/toy/addToy.vue')
        },  
        {
          path: 'food',
          name: 'Food',
          component: () => import(/* webpackChunkName: "about" */ './components/food/food.vue')
        },
        {
          path: 'addFood',
          name: 'AddFood',
          component: () => import(/* webpackChunkName: "about" */ './components/food/addFood.vue')
        },
        {
          path: 'shower',
          name: 'Shower',
          component: () => import(/* webpackChunkName: "about" */ './components/shower/shower.vue')
        },
        {
          path: 'addShower',
          name: 'AddShower',
          component: () => import(/* webpackChunkName: "about" */ './components/shower/addShower.vue')
        },
        {
          path:'List',
          name:'List',
          component: () => import(/* webpackChunkName: "about" */ './components/petOwner/List.vue'),
        },
        {
          path:'AddOwner',
          name:'AddOwner',
          component: () => import(/* webpackChunkName: "about" */ './components/petOwner/AddOwner.vue'),
        },
        {
          path: 'beautifyList',
          name: 'beautifyList',
          component: () => import('./components/beautify/beautifyList.vue')
        },
        {
          path: 'addBeautify',
          name: 'addBeautify',
          component: () => import('./components/beautify/addBeautify.vue')
        },
        {
          path: 'trusteeshipList',
          name: 'trusteeshipList',
          component: () => import('./components/trusteeship/trusteeshipList.vue')
        },
        {
          path: 'addTrusteeship',
          name: 'addTrusteeship',
          component: () => import('./components/trusteeship/addTrusteeship.vue')
        },
        {
          path: "storeFrontList",
          name: "StoreFrontList",
          component: () => import("./components/storefront/storeFrontList.vue")
        },
        {
          path: "addStoreFront",
          name: "AddStoreFront",
          component: () => import("./components/storefront/addStoreFront.vue")
        },{
          path: "staffList",
          name: "StaffList",
          component: () => import("./components/staff/staffList.vue")
        },
        {
          path: "addStaff",
          name: "AddStaff",
          component: () => import("./components/staff/addStaff.vue")
        },
      ]
    }
  ]
})
