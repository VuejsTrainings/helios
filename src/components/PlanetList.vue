<template>
    <div class="row">
        <h3>
            Liste des planètes
        </h3>
        <section class="row justify-content-md-center">
            <div class="col-md-3" style="margin-top:1em" v-for="planete in planetes" :key="planete.position">
                <div class="card">
                    <img class="card-img-top" :src="`/static/img/planets/${planete.name}.jpg`" :alt="planete.name">
                    <div class="card-body">
                        <h5 class="card-title">{{ planete.name }}</h5>
                        <p class="card-text">{{ planete.description }}</p>
                    </div>
                    <div class="card-footer">
                        <a href="#" class="btn btn-primary">
                            <i class="fa fa-plus-circle"></i>
                        </a>
                        <a href="#" class="btn btn-warning">
                            <i class="fa fa-edit" style="color:#fff"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
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
