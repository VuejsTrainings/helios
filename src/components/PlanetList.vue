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
import PlanetCard from '@/components/PlanetCard.vue'

export default {
  name: 'PlanetList',
  data () {
    return {
      planetes: this.$root.getPlanetesFromStorage()
    }
  },
  components: {
    'planet-card': PlanetCard
  },
  methods: {
    deletePlanet (index) {
      // Suppression des data de Vue
      this.planetes.splice(index, 1)
      // Suppression du localStorage
      this.$root.setPlanetesInStorage(this.planetes)
    }
  }
}
</script>

<style>

</style>
