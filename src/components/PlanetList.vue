<template>
    <div>
        <h3>
            Liste des planètes
        </h3>
        <ul>
            <li v-for="planete in planetes" :key="planete.position">
                {{ planete.name }}
            </li>
        </ul>
    </div>
</template>

<script>
import Planetes from '@/assets/planets.js'

export default {
  'name': 'PlanetList',
  data () {
    return {
      planetes: Planetes
    }
  }
}
</script>

<style>

</style>
