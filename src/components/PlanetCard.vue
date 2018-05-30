<template>
  <div class="card">
    <img class="card-img-top" :src="`/static/img/planets/${planet.name}.jpg`" :alt="planet.name">
    <div class="card-body">
      <h5 class="card-title">{{ planet.name }}</h5>
      <p class="card-text">{{ planet.description }}</p>
    </div>
    <div class="card-footer text-right">
      <a href="#" class="btn btn-primary">
        <i class="fa fa-plus-circle"></i>
      </a>
      <a href="#" class="btn btn-warning">
        <i class="fa fa-edit" style="color:#fff"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlanetCard',
  props: ['planet']
}
</script>

<style>

</style>
