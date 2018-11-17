import Vue from "vue";
import Vuex from "vuex";
import background from "./modules/background";
import music from "./modules/music";
import weather from "./modules/weather";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    background,
    music,
    weather
  }
});

export default store;
