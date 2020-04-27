<template lang="html">
  <div>
    <character-list-item v-for="character in characters" :character="character"></character-list-item>
  </div>
</template>

<script>
import CharacterListItem from '@/components/CharacterListItem.vue';

export default {
  name: 'character-list',
  props: ['characters'],
  components: {
    'character-list-item': CharacterListItem
  }
}
</script>

<style lang="css" scoped>
</style>
