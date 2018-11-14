import Vue from "vue";
import Vuex from "vuex";
import background from "./modules/background";
import music from "./modules/music";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    background,
    music
  }
});

export default store;
