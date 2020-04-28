<template lang="html">
  <div>
    <p>{{film.title}}</p>
    <p>Episode: {{film.episode_id}}</p>
    <router-link class="link" :to="{name: 'opening_crawl', params: {film}}">Opening Crawl</router-link>
    <p>Director: {{film.director}}</p>
    <p>Producer(s): {{film.producer}}</p>
    <p>Release Date: {{film.release_date | formatDate}}</p>
    <p class="link" v-on:click="handleClick">Characters</p>
    <router-link class="link" :to="{name: 'more_details', params: {planets, vehicles, starships, species}}">More Details</router-link>
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
      planets: [],
      vehicles: [],
      starships: [],
      species: []
    }
  },
  mounted() {
    this.getCharacters();
    this.getPlanets();
    this.getVehicles();
    this.getStarships();
    this.getSpecies();
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

    getPlanets() {
      const planetsPromises = this.film.planets.map((planets) => {
        return fetch(planets).then(res => res.json());
      });

      Promise.all(planetsPromises)
      .then((data) => {
        this.planets = data;
      });
    },

    getVehicles() {
      const vehiclesPromises = this.film.vehicles.map((vehicles) => {
        return fetch(vehicles).then(res => res.json());
      });

      Promise.all(vehiclesPromises)
      .then((data) => {
        this.vehicles = data;
      });
    },

    getStarships() {
      const starshipsPromises = this.film.starships.map((starships) => {
        return fetch(starships).then(res => res.json());
      });

      Promise.all(starshipsPromises)
      .then((data) => {
        this.starships = data;
      });
    },

    getSpecies() {
      const speciesPromises = this.film.species.map((species) => {
        return fetch(species).then(res => res.json());
      });

      Promise.all(speciesPromises)
      .then((data) => {
        this.species = data;
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

.characters:hover {
  cursor: url('../assets/lightsaber.png'), auto;
}

.link {
  cursor: url('../assets/lightsaber.png'), auto;
  text-decoration: none;
  color: #f9D71C;
}
</style>
