import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'
import Game from '@/views/Game.vue'
import Question from '@/views/Question.vue'
import Etf from '@/views/Etf.vue'
import ProfitCompute from '@/views/ProfitCompute.vue'
import test from '@/views/test'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path:'/game',
      name:'game',
      component:Game
    },
    {
      path:'/question',
      name:'question',
      component: Question
    },
    {
      path:'/etf',
      name:'etf',
      component: Etf
    },
    {
      path:'/profitCompute',
      name:'profitCompute',
      component: ProfitCompute
    },
    {
      path:'/',
      redirect:'/home'
    }
  ]
})
