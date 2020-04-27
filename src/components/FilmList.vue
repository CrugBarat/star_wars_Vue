<template lang="html">
  <div>
    <p>Film list:</p>
    <div v-for="film in films">
      <p>{{film.title}}</p>
      <film-details :film="film"></film-details>
    </div>
  </div>
</template>

<script>
import FilmDetails from '@/components/FilmDetails.vue'

export default {
  name: 'film-list',
  props: ['films'],
  components: {
    'film-details': FilmDetails
  }
}
</script>

<style lang="css" scoped>
</style>
