import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
// import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/events',
    name: 'Events',
    // route level code-splitting
    // this generates a separate chunk (events.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "events" */ '../views/Events.vue'),
  },
  {
    path: '/floor',
    name: 'Floor',
    // route level code-splitting
    // this generates a separate chunk (Floor.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "floor" */ '../views/Floor.vue'),
  },
  {
    path: '/signin',
    name: 'SignIn',
    // route level code-splitting
    // this generates a separate chunk (SignIn.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "SignIn" */ '../views/SignIn.vue'),
  },

  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (Register.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Register" */ '../views/register.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.name !== 'SignIn' && !store.getters.isUserAuthenticated) next({ name: 'SignIn' })
//   else next()
// })

export default router
