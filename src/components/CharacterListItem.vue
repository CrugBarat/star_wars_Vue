<template lang="html">
  <div>
    <router-link :to="{name: 'character', params: {character}}">{{character.name}}</router-link>
  </div>
</template>

<script>
import {eventBus} from '../main.js';

export default {
  name: 'character-list-item',
  props: ['character']
}
</script>

<style lang="css" scoped>
</style>
