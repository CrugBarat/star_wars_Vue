<template lang="html">
  <div>
    <section class="intro">
      A long time ago, in a galaxy far,<br> far away....
    </section>

    <section class="logo">
      <img src="../assets/logo.svg">
    </section>

  </div>

</template>

<script>
export default {
  name: 'opening-crawl',
  props: ['film']
}
</script>

<style lang="css" scoped>

    .intro {
      /* position intro phrase */
      position: absolute;
      margin-top: 35vh;
      margin-left: 25vw;
      z-index: 1;
      /* phrase animation duration*/
      animation: intro 6s ease-out 1s;
      color: rgb(75, 213, 238);
      font-weight: 400;
      font-size: 300%;
      /* hide phrase */
      opacity: 0;
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
      top: 20vh;
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

  /* animation code - scale and fade */
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

</style>
