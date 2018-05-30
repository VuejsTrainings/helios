<template>
  <div>
    <h3>Route inconnue!</h3>
    <p>Il semblerait que vous soyez <span lang="en">Lost in space</span>.</p>
    <p><router-link to="/">Retour à l'accueil</router-link></p>
  </div>
</template>
<script>
export default {
  name: 'NotFound'
}
</script>
