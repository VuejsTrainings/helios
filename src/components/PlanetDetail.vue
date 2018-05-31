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
import NotFound from '@/components/NotFound.vue'

export default {
  props: ['planete'],
  data () {
    return {
      planetObject: this.$root.getPlaneteFromStorage({name: this.planete}) // un truc qui ne me donne qu'une planète à partir de son nom
    }
  },
  name: 'PlanetDetail',
  components: {
    'not-found': NotFound
  }
}
</script>
