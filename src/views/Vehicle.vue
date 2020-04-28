<template lang="html">
  <div class="vehicle">
    <p>{{vehicle.name}}</p>
    <p>Model: {{vehicle.model}}</p>
    <p>Cost in Credits: {{vehicle.cost_in_credits}}</p>
    <p>Max Atmosphering Speed: {{vehicle.max_atmosphering_speed}}m</p>
    <p>Crew: {{vehicle.crew}}</p>
    <p>Passengers: {{vehicle.passengers}}</p>
    <p>Cargo Capacity: {{vehicle.cargo_capacity}}</p>
    <p>Vehicle Class: {{vehicle.vehicle_class}}</p>
    <p>Pilots:</p>
  </div>
</template>

<script>
export default {
  name: 'vehicle',
  props: ['vehicle']
}
</script>

<style lang="css" scoped>
</style>
