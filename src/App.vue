<template lang="html">
  <film-list :films="films"></film-list>
</template>

<script>
import FilmList from './components/FilmList.vue';

export default {
  name: 'app',
  data () {
    return {
      films: []
    }
  },
  mounted () {
    fetch('https://swapi.dev/api/films/')
    .then(res => res.json())
    .then(films => this.films = films.results)
  },
  components: {
    'film-list': FilmList
  }
}
</script>

<style lang="css" scoped>
</style>
