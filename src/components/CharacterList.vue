<template lang="html">
  <div>
    <p v-for="character in characters">{{character.name}}</p>
  </div>
</template>

<script>
export default {
  name: 'character-list',
  props: ['characters']
}
</script>

<style lang="css" scoped>
</style>
