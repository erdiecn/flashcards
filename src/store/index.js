import Vue from "vue";
import Vuex from "vuex";
// import all comps
import Cards from "./modules/cards";

// load vuex
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Cards
  }
});
