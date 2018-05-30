<template>
    <div class="row">
        <h3>
            Liste des planètes
        </h3>
        <section class="row justify-content-md-center">
            <div class="col-md-3" style="margin-top:1em" v-for="(planete,index) in planetes" :key="index">
                <planet-card v-bind:planet="planete"></planet-card>
            </div>
        </section>
    </div>
</template>

<script>
import Planetes from '@/assets/planets.js'
import PlanetCard from '@/components/PlanetCard.vue'

export default {
  name: 'PlanetList',
  data () {
    return {
      planetes: Planetes
    }
  },
  components: {
    'planet-card': PlanetCard
  }
}
</script>

<style>

</style>
