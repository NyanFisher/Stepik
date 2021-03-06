import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'О Себе',
    }
    
  },
  {
    path: '/phone',
    name: 'Phone',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Phone.vue')
  },
  // {
  //   path: '/todolist',
  //   name: 'TodoList',
  //   component: () => import('@/views/Todo.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
