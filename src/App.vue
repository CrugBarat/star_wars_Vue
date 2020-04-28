<template>
  <div>
    <div v-if="['opening_crawl'].indexOf($route.name)">
      <router-link class="link" :to="{name: 'home'}">
        <div class="title">
          <p>STAR WARS</p>
        </div>
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
    }

    .title {
      font-family: 'Jedi';
      font-size: 10vw;
      text-align: center;
      color: black;
      opacity: 80%;
      text-shadow: -1px -1px 0 #EEDB00, 1px -1px 0 #EEDB00, -1px 1px 0 #EEDB00, 1px 1px 0 #EEDB00;
    }

    p {
      padding: 0;
      margin: 0;
    }
</style>

<style>

    body {
      background-color: #000;
      font-family: 'Gothic';
      cursor: url('./assets/lightsaber.png'), auto;
      color: #EEDB00;
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
