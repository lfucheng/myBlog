import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Home from '@/components/page/Home'
import Study from '@/components/page/Study'
import Hobby from '@/components/page/Hobby'
import About from '@/components/page/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path:'/home',
      component: Home
    },
    {
      path:'/study',
      component: Study
    },
    {
      path:'/hobby',
      component: Hobby
    },
    {
      path:'/about',
      component: About
    }
  ]
})
