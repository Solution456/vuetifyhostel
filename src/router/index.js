import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


// import store from '../store'
import Profile from '../views/Profile.vue'


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
    path: '/floor/:Floor',
    name: 'FloorPage',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (FloorPage.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "FloorPAge" */ '../views/FloorPage.vue'),
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
  },

  {
    path: '/profile',
    name: 'Profile',
    component: Profile
    // route level code-splitting
    // this generates a separate chunk (Profile.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "Profile" */ '../views/profile.vue')
  },
  {
    path: '/adminStage',
    name: 'AdminStage',
    // route level code-splitting
    // this generates a separate chunk (AdminStage.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "AdminStage" */ '../views/AdminStage.vue')
  },
  {
    path: '/adminRooms/:floor',
    name: 'adminRooms',
    // route level code-splitting
    // this generates a separate chunk (adminRooms.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "adminRooms" */ '../views/adminRooms.vue'),
    props: true,

  },
  {
    path: '/residentTable/:room',
    name: 'residentTable',
    // route level code-splitting
    // this generates a separate chunk (residentTable.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "residentTable" */ '../views/residentTable.vue')
  },
  {
    path: '/attendedevents',
    name: 'AttendedEvents',
    component: () => import(/* webpackChunkName: "Register" */ '../views/AttendedEvents.vue')
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
