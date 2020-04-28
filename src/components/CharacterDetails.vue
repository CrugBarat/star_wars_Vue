<template lang="html">
  <div>
    <p>{{character.name}}</p>
    <p>Gender: {{character.gender}}</p>
    <p>Birth Year: {{character.birth_year}}</p>
    <p>Height: {{character.height | formatHeight}}m</p>
    <p>Hair Colour: {{character.hair_color}}</p>
    <p>Skin Colour: {{character.skin_color}}</p>
    <p>Eye Colour: {{character.eye_color}}</p>
    <p>Homeworld</p>
    <p>Vehicles</p>
    <p>Starships</p>
  </div>
</template>

<script>
export default {
  name: 'character-details',
  props: ['character'],
  filters: {
    formatHeight(value) {
      return value / 100
    }
  }
}
</script>

<style lang="css" scoped>
</style>
