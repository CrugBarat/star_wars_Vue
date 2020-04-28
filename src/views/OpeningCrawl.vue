<template lang="html">
  <div>
    <section class="intro">
    A long time ago, in a galaxy far,<br> far away....
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
    position: absolute;
    top: 45%;
    left: 50%;
    z-index: 1;
    animation: intro 6s ease-out 1s;
    color: rgb(75, 213, 238);
    font-weight: 400;
    font-size: 300%;
    opacity: 0;
  }

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

</style>
