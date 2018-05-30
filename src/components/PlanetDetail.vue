<template>
<div>
  <base href="https://fr.wikipedia.org">
  <h3>Au sujet de la planète {{ planete }}</h3>
  <article v-html="planetObject.html"></article>

</div>
</template>
<script>
import Planetes from '@/assets/planets.js'

export default {
  props: ['planete'],
  data () {
    return {
      planetObject: Planetes.find((item) => item.name === this.planete)
    }
  },
  name: 'PlanetDetail',
  beforeRouteEnter (to, from, next) {
    let op = Planetes.find((item) => item.name === to.params.planete)
    if (!op) {
      next({path: '/NotFound'})
    } else {
      next()
    }
  },
  beforeRouteUpdate (to, from, next) {
    let op = Planetes.find((item) => item.name === to.params.planete)
    if (!op) {
      next({path: '/NotFound'})
    } else {
      next()
    }
  }

}
</script>
