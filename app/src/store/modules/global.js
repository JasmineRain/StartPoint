const global = {
  state: {
    clientWid: 0,
    loadingBG: false,
    loadingSheet: false,
    loadingToplists: false
  },
  mutations: {
    setGlobal(state, info) {
      state.clientWid = info.clientWid;
    },
    setBGLoading(state, payload) {
      state.loadingBG = payload;
    },
    setSheetLoading(state, payload) {
      state.loadingSheet = payload;
    },
    setToplistsLoading(state, payload) {
      state.loadingSheet = payload;
    }
  },
  getters: {
    getClientWid: state => state.clientWid,
    getSheetLoading: state => state.loadingSheet,
    getBGLoading: state => state.loadingBG,
    getToplistsLoading: state => state.loadingToplists
  },

};

export default global;