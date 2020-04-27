<template lang="html">
  <div class="">
    <film-list :films="films"></film-list>
    <film-details v-if="selectedFilm" :film="selectedFilm"></film-details>
    <character-list :characters="characters"></character-list>
    <character-details v-if="selectedCharacter" :character="selectedCharacter"></character-details>
  </div>
</template>

<script>
import FilmList from './components/FilmList.vue';
import FilmDetails from '@/components/FilmDetails.vue';
import CharacterList from '@/components/CharacterList.vue';
import CharacterDetails from '@/components/CharacterDetails.vue';
import {eventBus} from './main.js';

export default {
  name: 'app',
  data() {
    return {
      films: [],
      selectedFilm: null,
      characters: null,
      selectedCharacter: null
    }
  },
  mounted() {
    fetch('https://swapi.dev/api/films/')
    .then(res => res.json())
    .then(films => this.films = films.results)

    eventBus.$on('selected-film', (film) => {
      this.selectedFilm = film;
    });

    eventBus.$on('characters-selected', (characters) => {
      this.characters = characters;
    });

    eventBus.$on('selected-character', (character) => {
      this.selectedCharacter = character;
    });
  },
  components: {
    'film-list': FilmList,
    'film-details': FilmDetails,
    'character-list': CharacterList,
    'character-details': CharacterDetails,
  },
}
</script>

<style lang="css" scoped>
</style>
