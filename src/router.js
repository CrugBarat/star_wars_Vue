import Vue from 'vue'
import Router from 'vue-router'
import Character from '@/views/Character.vue';
import Home from '@/views/Home.vue'

Vue.use(Router)

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
    }
  ]
});

export default router;
