<template>
  <div id="app" class="container">
    <h1>
      <i class="fa fa-globe text-secondary"></i>
      Helios</h1>
      <h2>Gestion des planètes du système solaire Star Wars</h2>
    <router-view/>
    <footer class="footer">
      <a href="#">Crédits</a>
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
  padding:0.5em 0.25em;
  /* position:fixed;
  width:100%;
  bottom:0;
  background:#fff; */
}
</style>
