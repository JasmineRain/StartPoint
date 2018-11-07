//import axios from 'axios'
import Vue from "vue";
import { Loading } from "element-ui";

const background = {
  state: {
    url: "",
    words: ""
  },
  mutations: {
    setBGInfo(state, info) {
      state.url = info.url;
      state.words = info.words;
    }
  },
  actions: {
    getBGInfo(context, url) {
      let info = {
        url: "",
        words: ""
      };
      let loadingInstance = Loading.service({
        text: "loading",
        background: "#000000"
      });
      Vue.axios.get(url).then(response => {
        info.url = "https://www.bing.com/" + response.data.images[0].url;
        info.words = response.data.images[0].copyright;
        context.commit("setBGInfo", info);
        loadingInstance.close();
      });
    }
  }
};

export default background;
