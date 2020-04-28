<template lang="html">
  <div>
    <p class="film" v-on:click="handleClick">{{film.title}}</p>
  </div>
</template>

<script>
import {eventBus} from '../main.js';

export default {
  name: 'list-item',
  props: ['film'],
  methods: {
    handleClick () {
      eventBus.$emit('selected-film', this.film)
    }
  }
}
</script>

<style lang="css" scoped>
.film:hover {
  cursor: url('../assets/lightsaber.png'), auto;
  text-decoration: underline;
  color: blue;
}
</style>
