<template>
  <div class="jumbotron">
  <h3 class="display-4">
    Merci à tous nos généreux et involontaires fournisseurs!
  </h3>
  <p class="lead">
    Nos images, textes, commentaires, informations ont indélicatement été
    dérobées auprès de services, sites Web, encyclopédies... divers et variés.
  </p>
  <hr class="my-4">
  <p>
    Citons, en vrac et sans ordre précis:
    <ul>
      <li>
        <i class="fa fa-bullhorn text-secondary"></i>
        <a href="//www.wikipedia.fr">Wikipedia</a>
      </li>
      <li>
        <i class="fa fa-images text-secondary"></i>
        <a href="//images.google.com">Google Images</a>
      </li>
      <li>
        <i class="fab fa-jedi-order text-success"></i>
        <a href="//www.starwars.com">Disney&trade;'s Star Wars&trade;</a>
      </li>
      <li>
        <i class="fa fa-book text-secondary"></i>
        <a href="//www.encyclopedie-universalis.fr">Universalis</a>
      </li>
    </ul>
  </p>

</div>
</template>

<script>
export default {
  name: 'Credits'
}
</script>

<style scoped>
  ul li{
    list-style: none;
  }
</style>
