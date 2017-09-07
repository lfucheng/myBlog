import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Home from '@/components/page/Home'
import Study from '@/components/page/Study'

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
    }
  ]
})
