import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Character from '@/views/Character.vue';
import Homeworld from '@/views/Homeworld.vue';
import Vehicle from '@/views/Vehicle.vue';
import Starship from '@/views/Starship.vue';
import OpeningCrawl from '@/views/OpeningCrawl.vue';
import MoreFilmDetails from '@/views/MoreFilmDetails.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: "",
      name: 'home',
      component: Home
    },
    {
      path: "/character",
      name: "character",
      component: Character,
      props: true
    },
    {
      path: "/homeworld",
      name: "homeworld",
      component: Homeworld,
      props: true
    },
    {
      path: "/vehicle",
      name: "vehicle",
      component: Vehicle,
      props: true
    },
    {
      path: "/starship",
      name: "starship",
      component: Starship,
      props: true
    },
    {
      path: "/opening_crawl",
      name: "opening_crawl",
      component: OpeningCrawl,
      props: true
    },
    {
      path: "/more_details",
      name: "more_details",
      component: MoreFilmDetails,
      props: true
    }
  ]
});

export default router;
