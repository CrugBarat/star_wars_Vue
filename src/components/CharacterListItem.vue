<template lang="html">
  <div>
    <p v-on:click="handleClick">{{character.name}}</p>
  </div>
</template>

<script>
import {eventBus} from '../main.js';

export default {
  name: 'character-list-item',
  props: ['character'],
  methods: {
    handleClick () {
      eventBus.$emit('selected-character', this.character)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
