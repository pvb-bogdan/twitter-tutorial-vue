import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import { users } from '../assets/users'
import Home from '../views/Home.vue'
import userProfile from '../views/userProfile.vue'
import admin from '../views/admin.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   //path: '/about',
  //   //name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/user/:userId',
    name: 'userProfile',
    component: userProfile
  },
  {
    path: '/admin',
    name: 'admin',
    component: admin,
    meta: {
      requiresAdmin: true
    }
  },
]

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes
})

// router guards - check the router for credentials, reroute, etc.
router.beforeEach(async(to,from,next) => {
  // check the user flag is Admin in store
  const user = store.state.User.user
  if(!user) {
    // here we can fetch the user form LS or API
    await store.dispatch('User/setUser', users[0])
  }
  const isAdmin = false
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin)

  // if route requires admin and you are not admim reroute to Home page
  if(requiresAdmin && !isAdmin) next({name: 'Home'})
  else next()
})

export default router
