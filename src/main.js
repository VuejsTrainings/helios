// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Planetes from '@/assets/planets.js'

Vue.use(VueResource)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data () {
    return {
      planetResource: Vue.resource('http://localhost:3000/planets{/id}')
    }
  },
  methods: {
    // Via Vue.resource
    getPlanetesFromResource () {
      return this.planetResource.query()
    },
    getUnePlaneteFromResource (id) {
      return this.planetResource.get({id: id})
    },
    getUnePlaneteFromResourceByName (name) {
      return this.planetResource.query({name: name})
    },
    updatePlaneteViaResource (planetObject) {
      return this.planetResource.update({id: planetObject.id}, planetObject)
    },
    addPlaneteViaResource (planetObject) {
      return this.planetResource.save(planetObject)
    },
    // API
    getPlanetesFromApi () {
      return this.$http.get('http://localhost:3000/planets')
    },
    deletePlaneteFromAPI (id) {
      return this.$http.delete('http://localhost:3000/planets/' + id)
    },

    // Storage
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
    savePlaneteInStorage (planete) {
      let planetes = this.getPlanetesFromStorage()
      let index = planetes.findIndex(item => item.name === planete.name)
      if (index !== -1) {
        planetes.splice(index, 1, planete)
      } else {
        planetes.push(planete)
      }
      this.setPlanetesInStorage(planetes)
    }
  },
  beforeMount () {
    if (!window.localStorage.getItem('planetes')) {
      this.setPlanetesInStorage(Planetes)
    }
  }
})
