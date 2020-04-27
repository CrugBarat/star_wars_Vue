<template lang="html">
  <div class="">
    <p>{{film.title}}</p>
    <p>Episode: {{film.episode_id}}</p>
    <p>Director: {{film.director}}</p>
    <p>Producer(s): {{film.producer}}</p>
    <p>Release Date: {{film.release_date}}</p>
    <p>Characters:</p>
  </div>
</template>

<script>
export default {
  name: 'film-details',
  props: ['film']
}
</script>

<style lang="css" scoped>
</style>
