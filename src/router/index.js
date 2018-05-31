import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '@/components/NotFound'
import Credits from '@/components/Credits'
import PlanetList from '@/components/PlanetList'
import PlanetDetail from '@/components/PlanetDetail'
import PlanetForm from '@/components/PlanetForm'

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
      path: '/planete/edit/:planete',
      name: 'PlanetEdit',
      component: PlanetForm,
      props: true
    },
    {
      path: '/planete/add',
      name: 'PlanetAdd',
      component: PlanetForm,
      props: true
    },
    {
      path: '/planete/:planete',
      name: 'PlanetDetail',
      component: PlanetDetail,
      props: true
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }

  ]
})
