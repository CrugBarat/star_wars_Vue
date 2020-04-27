<template lang="html">
  <div>
    <p>Film list:</p>
    <p v-for="film in films">{{film.title}}</p>
  </div>
</template>

<script>
export default {
  name: 'film-list',
  props: ['films']
}
</script>

<style lang="css" scoped>
</style>
