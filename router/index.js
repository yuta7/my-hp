import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Portfolio from '../components/Portfolio.vue'
import About from '../components/About.vue'

Vue.use(VueRouter)

export default new router({
  mode: 'history',
  base: process.env.BASE_URL,

  routes:  [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/portfolio',
    name: 'portfolio',
   
    component: Portfolio
  },
  {
    path: '/about',
    name: 'about',
   
    component: About
  },

  {
    path: '*',
    redirect: '/'
  }
]

})
