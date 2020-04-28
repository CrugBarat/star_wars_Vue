<template>
  <div>
    <router-link class="link" :to="{name: 'home'}">
      <div class="title">
        <p>Star</p>
      </div>
      <div class="title">
        <p>Wars</p>
      </div>
    </router-link>
      <router-view></router-view>
    </div>
  </template>

<script>
  export default {
    name: 'app'
  }
</script>


<style lang="css" scoped>
  .link {
    text-decoration: none;
    cursor: url('./assets/lightsaber.png'), auto;
  }

  .title {
    font-family: 'Jedi';
    font-size: 10vw;
    text-align: center;
    color: black;
    opacity: 80%;
    text-shadow: -1px -1px 0 #f9D71C, 1px -1px 0 #f9D71C, -1px 1px 0 #f9D71C, 1px 1px 0 #f9D71C;
  }

  p {
    padding: 0;
    margin: 0;
  }
</style>

<style>
  body {
    background-image: url('./assets/background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    font-family: 'Franklin';
    color: #f9D71C;
    cursor: url('./assets/lightsaber.png'), auto;
  }

  @font-face {
    font-family: 'Jedi';
    src: url('./assets/fonts/Starjedi.ttf');
  }

  @font-face {
    font-family: 'Franklin';
    src: url('./assets/fonts/Franklin.ttf');
  }
</style>
