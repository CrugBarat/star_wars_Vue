<template lang="html">
  <div class="starship">
    <p>{{starship.name}}</p>
    <p>Model: {{starship.model}}</p>
    <p>Manufacturer: {{starship.manufacturer}}</p>
    <p>Cost in Credits: {{starship.cost_in_credits}}</p>
    <p>Max Atmosphering Speed: {{starship.max_atmosphering_speed}}m</p>
    <p>Crew: {{starship.crew}}</p>
    <p>Passengers: {{starship.passengers}}</p>
    <p>Cargo Capacity: {{starship.cargo_capacity}}</p>
    <p>Consumables: {{starship.consumables}}</p>
    <p>Hyperdrive Rating: {{starship.hyperdrive_rating}}</p>
    <p>MGLT: {{starship.MGLT}}</p>
    <p>Starship Class: {{starship.starship_class}}</p>
    <p>Pilots:</p>
    <p>Films:</p>
  </div>
</template>

<script>
export default {
  name: 'starship',
  props: ['starship']
}
</script>

<style lang="css" scoped>
</style>
