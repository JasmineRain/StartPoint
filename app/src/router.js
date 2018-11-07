import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home/Home";
import Functions from "./components/Functions/Functions";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/functions",
      name: "functions",
      component: Functions
    }
  ]
});
