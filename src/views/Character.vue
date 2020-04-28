<template lang="html">
  <div class="container">
    <div class="character">
      <p>{{character.name}}</p>
      <p>Gender: {{character.gender}}</p>
      <p>Birth Year: {{character.birth_year}}</p>
      <p>Height: {{character.height | formatHeight}}m</p>
      <p>Hair Colour: {{character.hair_color}}</p>
      <p>Skin Colour: {{character.skin_color}}</p>
      <p>Eye Colour: {{character.eye_color}}</p>
      <router-link :to="{name: 'homeworld', params: {homeworld}}">Homeworld: {{homeworld.name}}</router-link>
    </div>
    <div class="starships">
      <p>Vehicles:</p>
      <router-link :to="{name: 'vehicle', params: {vehicle}}" v-for="vehicle in vehicles"> <br>{{vehicle.name}}</router-link>
      <p>Starships:</p>
      <router-link :to="{name: 'starship', params: {starship}}" v-for="starship in starships"> <br>{{starship.name}}</router-link>
    </div>
    <div class="films">
      <p>Films</p>
      <p v-for="film in films">{{film.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'character-details',
  props: ['character'],
  data() {
    return {
      homeworld: [],
      vehicles: [],
      starships: [],
      films: []
    }
  },
  filters: {
    formatHeight(value) {
      return value / 100
    }
  },
  mounted() {
    this.getHomeworld();
    this.getVehicles();
    this.getStarships();
    this.getFilms();
  },
  methods: {
    getHomeworld() {
      fetch(this.character.homeworld)
      .then(res => res.json())
      .then(homeworld => this.homeworld = homeworld)
    },

    getVehicles() {
      const vehiclesPromises = this.character.vehicles.map((vehicles) => {
        return fetch(vehicles).then(res => res.json());
      });

      Promise.all(vehiclesPromises)
      .then((data) => {
        this.vehicles = data;
      });
    },

    getStarships() {
      const starshipsPromises = this.character.starships.map((starships) => {
        return fetch(starships).then(res => res.json());
      });

      Promise.all(starshipsPromises)
      .then((data) => {
        this.starships = data;
      });
    },

    getFilms() {
      const filmsPromises = this.character.films.map((films) => {
        return fetch(films).then(res => res.json());
      });

      Promise.all(filmsPromises)
      .then((data) => {
        this.films = data;
      });
    }
  }
}
</script>

<style lang="css" scoped>
.container {
  display: flex;
  flex-direction: row;
}

.character {
  width: 32%;
}

.starships{
  width: 32%;
}

.films {
  width: 32%;
}
</style>
