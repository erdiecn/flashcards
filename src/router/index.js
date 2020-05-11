import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Decks from "../components/Decks.vue";
import Cards from "../components/Cards.vue";
import Flashcards from "../components/Flashcard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: "/decks",
    name: "Decks",
    component: Decks
  },
  {
    path: "/cards",
    name: "Cards",
    component: Cards
  },
  {
    path: "/flashcards",
    name: "Flashcards",
    component: Flashcards
  }
];

const router = new VueRouter({
  routes
});

export default router;
