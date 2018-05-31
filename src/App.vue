<template>
  <div id="app" class="container">
    <h1>
      <router-link to="/">
        <i class="fa fa-globe text-secondary"></i>
      </router-link>
      Helios</h1>
      <h2>Gestion des planètes du système solaire Star Wars</h2>
    <router-view/>
    <footer class="footer">
      <!-- <router-link to="/credits"> -->
      <router-link v-bind:to="{name:'Credits'}">
        Crédits
      </router-link>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'App'

}
</script>

<style>
footer{
  border-top:1px solid #ddd;
  margin-top:1em;
  padding:0.5em 0.25em 2em;
  /* position:fixed;
  width:100%;
  bottom:0;
  background:#fff; */
}
</style>
