const global = {
  state: {
    clientWid: 0,
    loadingBG: false,
    loadingSheet: false,
    loadingToplists: false,
    loadingSearch: {
      song: true,
      singer: true,
      album: true,
      mv: true,
      playlist: true,
      user: true
    }
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
      state.loadingToplists = payload;
    },
    setSearchLoading(state, payload) {
      state.loadingSearch = {...state.loadingSearch, ...payload}
    }
  },
  getters: {
    getClientWid: state => state.clientWid,
    getSheetLoading: state => state.loadingSheet,
    getBGLoading: state => state.loadingBG,
    getToplistsLoading: state => state.loadingToplists,
    getSearchLoading: state => state.loadingSearch
  },

};

export default global;