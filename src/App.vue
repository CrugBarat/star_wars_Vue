<template>
  <div>
    <div v-if="['opening_crawl'].indexOf($route.name)">
      <router-link class="link" :to="{name: 'home'}">
        <img class="title" src="./assets/logo.svg">
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

    export default {
      name: 'app',
      mounted () {
        const numStars = 100;

        for (let i = 0; i < numStars; i++) {
          let star = document.createElement("div");
          star.className = "star";
          let xy = getRandomPosition();
          star.style.top = xy[0] + 'px';
          star.style.left = xy[1] + 'px';
          document.body.append(star);
        }

        function getRandomPosition() {
          let y = window.innerWidth;
          let x = window.innerHeight;
          let randomX = Math.floor(Math.random()*x);
          let randomY = Math.floor(Math.random()*y);
          return [randomX,randomY];
        }
      }
    }

</script>


<style lang="css" scoped>

    .link {
      text-decoration: none;
      cursor: url('./assets/lightsaber.png'), auto;
      display: block;
      text-align: center;
    }

    .title {
      height: 250px;
    }

</style>

<style>

    body {
      background-color: #000;
      font-family: 'Gothic';
      cursor: url('./assets/lightsaber.png'), auto;
      color: #EEDB00;
      font-size: 25px;
    }

    .star {
      position: absolute;
      width: 1px;
      height: 1px;
      background-color: white;
    }

    @font-face {
      font-family: 'Jedi';
      src: url('./assets/fonts/Starjedi.ttf');
    }

    @font-face {
      font-family: 'Gothic';
      src: url('./assets/fonts/gothic.otf');
    }

    @font-face {
      font-family: 'News';
      src: url('./assets/fonts/news.otf');
    }

</style>
