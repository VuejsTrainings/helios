<template>
  <form id="form" ref="planetInfos" @submit.prevent="formSubmit">
    <h3>Informations sur la planète</h3>
    <ul>
      <li class="form-group">
        <label for="nomCtl">Nom</label>
        <input type="text" class="form-control" id="nomCtl" placeholder="Terre"
          v-model="planetObject.name" :required="required.indexOf('name')!==-1" >
      </li>
      <li class="form-group">
        <label for="positionCtl">Position</label>
        <input type="number" class="form-control" min="1" step="1" id="positionCtl"
          placeholder="1" v-model="planetObject.position" required>
      </li>
      <li class="form-group">
        <label for="diametreCtl">Diamètre</label>
        <input type="number" class="form-control" min="1" step="1" id="diametreCtl"
          placeholder="15620" v-model="planetObject.diametre" required>
      </li>
      <li class="form-group">
        <label for="typeCtl">Type</label>
        <select class="form-control" id="typeCtl"
            v-model="planetObject.matiere" required>
          <option>rocheuse</option>
          <option>gazeuse</option>
          <option>naine</option>
        </select>
      </li>
      <li class="form-group">
        <label for="descriptionCtl">Description</label>
        <textarea class="form-control" id="descriptionCtl" rows="5"
            v-model="planetObject.description" required></textarea>
      </li>
      <li class="form-group">
        <label for="htmlCtl">Article</label>
        <textarea class="form-control" id="htmlCtl" rows="5" v-model="planetObject.html"></textarea>
      </li>
    <button type="submit" class="btn btn-success"
        :disabled="notValid">OK</button>
    </ul>
  </form>
</template>

<script>
export default {
  name: 'PlanetForm',
  props: ['planete'],
  data () {
    let planet = {}
    if (this.planete) {
      planet = this.$root.getPlaneteFromStorage({name: this.planete})
    }
    return {
      planetObject: planet,
      required: ['name', 'position', 'diametre', 'matiere']
    }
  },
  computed: {
    notValid () {
      let valid = (Object.keys(this.planetObject).length > 0)
      this.required.forEach(att => { valid = valid && !(this.planetObject[att] === '') })
      return !valid
    }
  },
  methods: {
    formSubmit (ev) {
      // Validation du formulaire (si besoin)

      // Transmission des données pour leur persistance
      this.$root.savePlaneteInStorage(this.planetObject)

      // Retour utilisateur ou "rediriger"
      this.$router.push({name: 'PlanetList'})
    }
  }
}
</script>

<style scoped>
li.form-group{
  list-style-type: none;
}
:invalid{
  border-color:#f00;
}
:invalid:focus{
  background-color:#fdd;
}
.form-control:valid:focus{
  border-color: #090;
  background:#dfd;
  box-shadow:0 0 0 0.2rem #9f9;
}
</style>
