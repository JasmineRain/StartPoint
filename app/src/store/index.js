import Vue from "vue";
import Vuex from "vuex";
import background from "./modules/background";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    background
  }
});

export default store;
