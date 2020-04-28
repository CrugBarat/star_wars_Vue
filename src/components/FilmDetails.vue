<template lang="html">
  <div>
    <p>{{film.title}}</p>
    <p>Episode: {{film.episode_id}}</p>
    <p>Director: {{film.director}}</p>
    <p>Producer(s): {{film.producer}}</p>
    <p>Release Date: {{film.release_date | formatDate}}</p>
    <p v-on:click="handleClick">Characters:</p>
  </div>
</template>

<script>
import {eventBus} from '../main.js';
import moment from 'moment';

export default {
  name: 'film-details',
  props: ['film'],
  data() {
    return {
      characters: [],
    }
  },
  mounted() {
    this.getCharacters()
  },
  methods: {
    getCharacters() {
      const characterPromises = this.film.characters.map((character) => {
        return fetch(character).then(res => res.json());
      });

      Promise.all(characterPromises)
      .then((data) => {
        this.characters = data;
      });
    },

    handleClick() {
      eventBus.$emit('characters-selected', this.characters);
    }
  },
  watch: {
    film(){
      this.getCharacters()
    }
  },
  filters: {
    formatDate(value) {
      return moment(value, 'YYYY-MM-DD').format('DD MMM YYYY');
    }
  }
}
</script>

<style lang="css" scoped>
</style>
