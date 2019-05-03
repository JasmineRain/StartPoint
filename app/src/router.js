import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home/Home";
import Functions from "./components/Functions/Functions";
import Calendar from "./components/Functions/Calendar/Calendar";
import Music from "./components/Music/Music";
import Sheet from "./components/Music/Sheet/Sheet";
import Search from "./components/Music/Search/Search";
import Toplists from "./components/Music/Toplists/Toplists";
import TopPlaylists from "./components/Music/TopPlaylists/TopPlaylists";
import CommentCell from "./components/Music/Comment/Cell/commentCell";

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
          redirect: "sheet/playlist"
        },
        {
          path: "sheet/:list",
          component: Sheet,
          props: true
        },
        {
          path: "sheet/:list/:vendor/:id",
          component: Sheet,
          props: true
        },
        {
          path: "search",
          component: Search
        },
        {
          path: "toplists",
          component: Toplists
        },
        {
          path: "top_playlists",
          component: TopPlaylists
        },
        {
          path: 'test',
          component: CommentCell
        }
      ]
    }
  ]
});
