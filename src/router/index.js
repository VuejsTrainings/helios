import Vue from 'vue'
import Router from 'vue-router'
import PlanetList from '@/components/PlanetList'
import Credits from '@/components/Credits'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PlanetList',
      component: PlanetList
    },
    {
      path: '/credits',
      name: 'Credits',
      component: Credits
    }
  ]
})
