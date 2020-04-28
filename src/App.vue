<template>
  <div>
    <nav>
      <router-link :to="{name: 'home'}">Star Wars</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="css" scoped>

</style>
