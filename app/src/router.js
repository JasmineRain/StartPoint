import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home/Home";
import Functions from "./components/Functions/Functions";
import Calendar from "./components/Functions/Calendar/Calendar";
import Music from "./components/Music/Music";
import Player from "./components/Music/Player/Player";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/functions",
      name: "functions",
      component: Functions
    },
    {
      path: "/calendar",
      name: "calendar",
      component: Calendar
    },
    {
      path: "/music",
      component: Music,
      children: [
        {
          path: "",
          redirect: "sheet/mylist"
        },
        {
          path: "sheet/:list",
          component: Player
        }
      ]
    }
  ]
});
