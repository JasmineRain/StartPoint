import axios from "axios";

const bingUrl = "/BingAPI/HPImageArchive.aspx?format=js&idx=0&n=8";

const background = {
  state: {
    images: [],
    url: "",
    desc: ""
  },
  mutations: {
    setImages(state, images) {
      state.images = images
    },
    setBGUrl(state, url) {
      state.url = url
    },
    setBGWords(state, desc) {
      state.desc = desc
    }
  },
  getters: {
    getImages: state => state.images,
    getBGUrl: state => state.url,
    getBGWords: state => state.desc
  },
  actions: {
    getBGInfo(context) {
      context.commit("setBGLoading", true);
      axios.get(bingUrl).then(response => {
        console.log(response);
        context.commit("setImages", response.data.images);
        context.commit("setBGUrl", "https://www.bing.com" + response.data.images[0].url);
        context.commit("setBGWords", response.data.images[0].copyright);
        context.commit("setBGLoading", false);
      });
    }
  }
};

export default background;
