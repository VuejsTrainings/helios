<template>
  <form id="form">
    <h3>Informations sur la planète</h3>
    <ul>
      <li class="form-group">
        <label for="nomCtl">Nom</label>
        <input type="text" class="form-control" id="nomCtl" placeholder="Terre">
      </li>
      <li class="form-group">
        <label for="positionCtl">Position</label>
        <input type="number" class="form-control" min="1" step="1" id="positionCtl" placeholder="1">
      </li>
      <li class="form-group">
        <label for="distanceCtl">Distance au soleil</label>
        <input type="number" class="form-control" min="1" step="1" id="distanceCtl" placeholder="15620">
      </li>
      <li class="form-group">
        <label for="typeCtl">Type</label>
        <select class="form-control" id="typeCtl">
          <option>rocheuse</option>
          <option>gazeuse</option>
          <option>naine</option>
        </select>
      </li>
      <li class="form-group">
        <label for="descriptionCtl">Description</label>
        <textarea class="form-control" id="descriptionCtl" rows="5"></textarea>
      </li>
      <li class="form-group">
        <label for="htmlCtl">Article</label>
        <textarea class="form-control" id="htmlCtl" rows="5"></textarea>
      </li>
    <button type="submit" class="btn btn-success">Submit</button>
    </ul>
  </form>
</template>

<script>
export default {
  name: 'PlanetForm',
  props: ['planete']
}
</script>

<style scoped>
li.form-group{
  list-style-type: none;
}
</style>
