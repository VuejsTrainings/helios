<template>
    <div class="row">
        <h3>
            Liste des planètes
        </h3>
        <section class="row justify-content-md-center">
            <div class="col-md-3" style="margin-top:1em" v-for="(planete,index) in planetes" :key="index">
                <planet-card v-bind:planet="planete"  @deleting="deletePlanet(index)"></planet-card>
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
  },
  methods: {
    deletePlanet (index) {
      this.planetes.splice(index, 1)
    }
  }
}
</script>

<style>

</style>
