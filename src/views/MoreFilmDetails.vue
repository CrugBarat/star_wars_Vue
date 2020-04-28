<template lang="html">
  <div class="container">
    <div class="planets">
      <p>Planets:</p>
      <p v-for="planet in planets">{{planet.name}}</p>
    </div>
    <div class="vehicles">
      <p>Vehicles:</p>
      <p v-for="vehicle in vehicles">{{vehicle.name}}</p>
      <p>Starships:</p>
      <p v-for="starship in starships">{{starship.name}}</p>
    </div>
    <div class="species">
      <p>Species:</p>
      <p v-for="oneSpecies in species">{{oneSpecies.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'more-film-details',
  props: ['planets', 'vehicles', 'starships', 'species']
}
</script>

<style lang="css" scoped>
.container {
  display: flex;
  flex-direction: row;
}

.planets {
  width: 32%;
}

.vehicles{
  width: 32%;
}

.species {
  width: 32%;
}
</style>
