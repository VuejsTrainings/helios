<template>
  <div>
    <div v-if="planetObject">
      <h3>Au sujet de la planète {{ planetObject.name }}</h3>
      <article v-html="planetObject.html"></article>
    </div>
    <not-found v-else></not-found>

  </div>
</template>
<script>
import Planetes from '@/assets/planets'
import NotFound from '@/components/NotFound.vue'

export default {
  props: ['planete'],
  data () {
    return {
      planetObject: Planetes.find(item => item.name === this.planete)
    }
  },
  name: 'PlanetDetail',
  components: {
    'not-found': NotFound
  }
}
</script>
