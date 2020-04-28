<template lang="html">
  <div class="homeworld">
    <p>{{homeworld.name}}</p>
    <p>Rotation Period: {{homeworld.rotation_period}}</p>
    <p>Orbital Period: {{homeworld.orbital_period}}</p>
    <p>Diameter: {{homeworld.diameter}}m</p>
    <p>Climate: {{homeworld.climate}}</p>
    <p>Gravity: {{homeworld.gravity}}</p>
    <p>Terrain: {{homeworld.terrain}}</p>
    <p>Surface Water: {{homeworld.surface_water}}</p>
    <p>Population: {{homeworld.population}}</p>
  </div>
</template>

<script>
export default {
  name: 'homeworld',
  props: ['homeworld']
}
</script>

<style lang="css" scoped>
</style>
