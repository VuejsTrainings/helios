import Vue from 'vue'
import Router from 'vue-router'
import PlanetList from '@/components/PlanetList'
import Credits from '@/components/Credits'
import PlanetDetail from '@/components/PlanetDetail'

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
    },
    {
      path: '/planete/:planete',
      name: 'PlanetDetail',
      component: PlanetDetail,
      props: true
    }

  ]
})
