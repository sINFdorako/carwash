import Vue from 'vue'
import Router from 'vue-router'
import router from '@/components/router'
import navbar from '@/components/navbar'
import banner from '@/components/banner'
import ownfooter from '@/components/ownfooter'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'router',
      component: router
    },
    {
      path: '/navbar',
      name: 'navbar',
      component: navbar
    },
    {
      path: '/banner',
      name: 'banner',
      component: banner
    },
    {
      path: '/ownfooter',
      name: 'ownfooter',
      component: ownfooter
    }
  ]
})
