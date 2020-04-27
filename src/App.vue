<template lang="html">
  <div class="container">
    <div class="film-list">
      <film-list :films="films"></film-list>
    </div>
    <div class="film-details">
      <film-details v-if="selectedFilm" :film="selectedFilm"></film-details>
    </div>
    <div class="character-list">
      <character-list :characters="characters"></character-list>
    </div>
    <div class="character-details">
      <character-details v-if="selectedCharacter" :character="selectedCharacter"></character-details>
    </div>
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

.container {
  border-style: solid;
  display: flex;
  flex-direction: row;
}

.film-list {
  border-style: solid;
  width: 24%;
}

.film-details {
  border-style: solid;
  width: 24%;
}

.character-list {
  border-style: solid;
  width: 24%;
}

.character-details {
  border-style: solid;
  width: 24%;
}

</style>
