<template lang="html">
  <div>
    <p>Film list:</p>
      <list-item v-for="film in films" :film="film"></list-item>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem.vue'

export default {
  name: 'film-list',
  props: ['films'],
  components: {
    'list-item': ListItem
  }
}
</script>

<style lang="css" scoped>
</style>
