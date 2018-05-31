// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Planetes from '@/assets/planets.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  methods: {
    getPlanetesFromStorage () {
      return JSON.parse(window.localStorage.getItem('planetes'))
    },
    setPlanetesInStorage (planetes) {
      window.localStorage.setItem('planetes', JSON.stringify(planetes))
    },
    getPlaneteFromStorage (objRecherche) {
      let planetes = this.getPlanetesFromStorage()
      if (!objRecherche) {
        return planetes[0]
      }
      let field = Object.keys(objRecherche)[0]
      let val = Object.values(objRecherche)[0]
      console.log(field)
      console.log(val)
      return planetes.find(item => item[field] === val)
    },
    savePlaneteInStorage (name, planete) {
      let planetes = this.getPlanetesFromStorage()
      let index = planetes.findIndex(item => item.name === name)
      planetes.splice(index, 1, planete)
      this.setPlanetesInStorage(planetes)
    }
  },
  mounted () {
    if (!window.localStorage.getItem('planetes')) {
      this.setPlanetesInStorage(Planetes)
    }
  }
})
