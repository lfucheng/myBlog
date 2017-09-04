import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Show from '@/components/page/Show'
import Home from '@/components/page/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/show'
    },
    {
      path:'/show',
      component: Show
    },
    {
      path:'/home',
      component: Home
    }
  ]
})
