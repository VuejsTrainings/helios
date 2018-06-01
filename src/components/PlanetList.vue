<template>
    <div class="row">
        <h3>
            Liste des planètes
            <router-link :to="{name:'PlanetAdd'}">
              <i class="fa fa-plus-circle btn btn-primary"></i>
            </router-link>
            <i class="btn btn-warning fa fa-sync" style="color:#fff" @click="refresh"></i>
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
    // this.getPlanetsFromApi()
    // this.getPlanetesViaResource()
    // setTimeout(() => { this.planetes = [{id: 1, name: 'Terre'}] }, 1000)
    return {
      planetes: []
    }
  },
  components: {
    'planet-card': PlanetCard
  },
  methods: {
    deletePlanet (index) {
      let id = this.planetes[index].id
      // Suppression sur l'API
      this.$root.deletePlaneteFromAPI(id)
        .then(res => {
          console.log('Planète ' + id + ' supprimée du serveur!')
        })
      // Suppression des data de Vue
      this.planetes.splice(index, 1)
      // Suppression du localStorage
      this.$root.setPlanetesInStorage(this.planetes)
    },
    getPlanetsFromApi () {
      this.$root.getPlanetesFromApi()
        .then(res => {
          this.planetes = res.body
        })
    },
    getPlanetesViaResource () {
      this.$root.getPlanetesFromResource()
        .then(res => {
          this.planetes = res.body
        })
    },
    refresh (ev) {
      this.getPlanetesViaResource()
    }
  },
  created () {
    this.refresh()
  }
}
</script>

<style>

</style>
