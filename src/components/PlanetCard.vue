<template>
  <div class="card">
    <img class="card-img-top" :src="`/static/img/planets/${planet.name}.jpg`" :alt="planet.name">
    <div class="card-body">
      <h5 class="card-title">{{ planet.name }}</h5>
      <p class="card-text">{{ planet.description }}</p>
    </div>
    <div class="card-footer text-right">

      <!-- <router-link :to="{name:'PlanetDetail',params:{planete:planet.name}}"   class="btn btn-primary"> -->
      <router-link :to="`/planete/${planet.name}`" class="btn btn-primary">
        <i class="fa fa-eye" title="Plus d'informations"></i>
      </router-link>
      <router-link :to="{name:'PlanetEdit',params:{planete:planet.name}}" class="btn btn-warning">
        <i class="fa fa-edit" style="color:#fff" title="Editer"></i>
      </router-link>
      <i class="fa fa-times btn btn-danger" style="color:#fff" title="Supprimer" v-on:click="deletingPlanet"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlanetCard',
  props: ['planet'],
  methods: {
    /**
     * Soumet la suppression d"une planète à la liste.
     */
    deletingPlanet () {
      this.$emit('deleting')
    }
  }
}
</script>

<style>

</style>
