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
  </div>
</template>

<script>
import FilmList from '@/components/FilmList.vue';
import FilmDetails from '@/components/FilmDetails.vue';
import CharacterList from '@/components/CharacterList.vue';
import {eventBus} from '../main.js';

export default {
  name: 'app',
  data() {
    return {
      films: [],
      selectedFilm: null,
      characters: null,
    }
  },
  mounted() {
    fetch('https://swapi.dev/api/films/')
    .then(res => res.json())
    .then(films => this.films = films.results)

    eventBus.$on('selected-film', (film) => {
      this.selectedFilm = film;
      this.characters = null;
    });

    eventBus.$on('characters-selected', (characters) => {
      this.characters = characters;
    });

  },
  components: {
    'film-list': FilmList,
    'film-details': FilmDetails,
    'character-list': CharacterList
  },
}
</script>

<style lang="css" scoped>

.container {
  display: flex;
  flex-direction: row;
}

.film-list {
  width: 32%;
}

.film-details {
  width: 32%;
}

.character-list {
  width: 32%;
}

</style>
