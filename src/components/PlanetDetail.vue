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
  name: 'PlanetDetail'
}
</script>
