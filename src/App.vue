<template lang="html">
  <div class="">
    <film-list :films="films"></film-list>
    <film-details v-if="selectedFilm" :film="selectedFilm"></film-details>
  </div>
</template>

<script>
import FilmList from './components/FilmList.vue';
import FilmDetails from '@/components/FilmDetails.vue';
import {eventBus} from './main.js';

export default {
  name: 'app',
  data () {
    return {
      films: [],
      selectedFilm: null
    }
  },
  mounted () {
    fetch('https://swapi.dev/api/films/')
    .then(res => res.json())
    .then(films => this.films = films.results)

    eventBus.$on('selected-film', (film) => {
      this.selectedFilm = film;
    })
  },
  components: {
    'film-list': FilmList,
    'film-details': FilmDetails
  }
}
</script>

<style lang="css" scoped>
</style>
