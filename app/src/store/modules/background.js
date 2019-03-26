import axios from "axios";
import {Loading} from "element-ui";

const bingUrl = "/BingAPI/HPImageArchive.aspx?format=js&idx=0&n=1";

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
  getters: {
    getBGUrl: state => state.url,
    getBGWords: state => state.words
  },
  actions: {
    getBGInfo(context) {
      context.commit("setBGLoading", true);
      let info = {
        url: "",
        words: ""
      };
      axios.get(bingUrl).then(response => {
        info.url = "https://www.bing.com/" + response.data.images[0].url;
        info.words = response.data.images[0].copyright;
        context.commit("setBGInfo", info);
        context.commit("setBGLoading", false);
      });
    }
  }
};

export default background;
