<template lang="html">
  <div>
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
    }
  }
}
</script>

<style lang="css" scoped>
</style>
