import Vue from 'vue'
import Router from 'vue-router'
import PlanetList from '@/components/PlanetList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PlanetList',
      component: PlanetList
    }
  ]
})
