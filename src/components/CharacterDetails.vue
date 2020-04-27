<template lang="html">
  <div>
    <p>{{character.name}}</p>
    <p>Gender: {{character.gender}}</p>
    <p>Height: {{character.height}}</p>
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
}
</script>

<style lang="css" scoped>
</style>
