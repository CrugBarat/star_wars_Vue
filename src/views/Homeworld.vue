<template lang="html">
  <div class="container">
    <div class="homeworld">
      <p>{{homeworld.name}}</p>
      <p>Rotation Period: {{homeworld.rotation_period}}</p>
      <p>Orbital Period: {{homeworld.orbital_period}}</p>
      <p>Diameter: {{homeworld.diameter}}m</p>
      <p>Climate: {{homeworld.climate}}</p>
      <p>Gravity: {{homeworld.gravity}}</p>
      <p>Terrain: {{homeworld.terrain}}</p>
      <p>Surface Water: {{homeworld.surface_water}}</p>
      <p>Population: {{homeworld.population}}</p>
    </div>
    <div class="residents">
      <p>Residents:</p>
      <p v-for="resident in residents">{{resident.name}}</p>
    </div>
    <div class="films">
      <p>Films:</p>
      <p v-for="film in films">{{film.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeworld',
  props: ['homeworld'],
  data() {
    return {
      residents: [],
      films: []
    }
  },
  mounted() {
    this.getResidents();
    this.getFilms();
  },
  methods: {
    getResidents() {
      const residentsPromises = this.homeworld.residents.map((residents) => {
        return fetch(residents).then(res => res.json());
      });

      Promise.all(residentsPromises)
      .then((data) => {
        this.residents = data;
      });
    },

    getFilms() {
      const filmsPromises = this.homeworld.films.map((films) => {
        return fetch(films).then(res => res.json());
      });

      Promise.all(filmsPromises)
      .then((data) => {
        this.films = data;
      });
    },
  }
}
</script>

<style lang="css" scoped>

.container {
  display: flex;
  flex-direction: row;
}

.homeworld {
  width: 32%;
}

.residents{
  width: 32%;
}

.films {
  width: 32%;
}

</style>
