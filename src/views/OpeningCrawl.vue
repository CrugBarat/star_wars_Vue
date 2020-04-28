<template lang="html">
  <div>
    <section class="intro">
      A long time ago, in a galaxy far,<br> far away....
    </section>

    <section class="logo">
      <img src="../assets/logo.svg">
    </section>

    <div class="board">
      <div class="content">
        <p class="episode">Episode {{film.episode_id}}</p>
        <p class="title">{{film.title.toUpperCase()}}</p>
        <br>
        <p>{{film.opening_crawl}}</p>
      </div>
    </div>

    <audio @loadeddata="audioDelay" preload="auto">
      <source src="../assets/song.mp3" type="audio/mpeg">
    </audio>

  </div>

</template>

<script>
  export default {
    name: 'opening-crawl',
    props: ['film'],
    methods: {
    audioDelay(){
      let audioPlayer = event.target;
      setTimeout(function() {audioPlayer.play()}, 8000)
      }
    }
  }
</script>


<style lang="css" scoped>

    .intro {
      /* position intro phrase */
      position: absolute;
      margin-top: 35vh;
      margin-left: 27vw;
      z-index: 1;
      /* phrase animation duration*/
      animation: intro 6s ease-out 1s;
      /* hide phrase */
      opacity: 0;
      color: #4bd5ee;
      font-weight: 300;
      font-size: 300%;
      font-family: 'News Cycle', sans-serif;
    }

    /* animationcode - loop through phrase opacity */
    @keyframes intro {
      0% {
          opacity: 0;
      }
      20% {
          opacity: 1;
      }
      90% {
          opacity: 1;
      }
      100% {
          opacity: 0;
      }
    }

    .logo {
      /* position the logo */
      position: absolute;
      top: 14.5vh;
      left: 25vw;
      z-index: 1;
      margin: auto;
      /* animation duration */
      animation: logo 9s ease-out 9s;
      /* hide logo */
      opacity: 0;
    }

  .logo svg {
      width: inherit;
  }

  /* animation code - logo scale and fade */
  @keyframes logo {
    0% {
        transform: scale(3.00);
        opacity: 1;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: scale(0.1);
    }
  }

  p {
  color: #EEDB00;
  }


  .board {
    font-family: 'News';
    /* set position of crawl on z axis */
    transform: perspective(350px) rotateX(25deg);
    /* set position on xy */
    transform-origin: 50% 100%;
    /* position crawl */
    position: absolute;
    height: 300%;
    width: 100vw;
    bottom: 0;
    left: 48%;
    margin-left: -49vw;
    overflow: hidden;
    font-size: 475%;
    text-align: justify;
  }

  .board:after {
    position: absolute;
    content: ' ';
    bottom: 60%;
    left: 0;
    right: 0;
    top: 0;
  }


  .content {
    /* animation duration and position */
    animation: scroll 80s linear 16s;
    position: absolute;
    top: 100%;
  }

  .title {
    font-family: 'Gothic';
    font-size: 15vh;
    margin-bottom: 0;
  }

  .episode, .title {
    text-align: center;
  }

  /* animation code  */
  @keyframes scroll {
      0% {
          top: 100%;
      }
      100% {
          top: -170%;
      }
  }

</style>
