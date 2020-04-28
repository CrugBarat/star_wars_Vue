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
  }
}
</script>

<style lang="css" scoped>
.container {
  border-style: solid;
  display: flex;
  flex-direction: row;
}

.character {
  border-style: solid;
  width: 32%;
}

.Homeworld {
  border-style: solid;
  width: 32%;
}

.vehicles {
  border-style: solid;
  width: 32%;
}
</style>
