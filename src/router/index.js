import Vue from 'vue'
import Router from 'vue-router'
import appHome from '@/components/appHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'appHome',
      component: appHome
    }
  ]
})
