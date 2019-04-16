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
    },
    loadingTopPlaylists: false,
    loadingHotCategories: false,
    loadingComment: false
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
      state.loadingSearch = {...state.loadingSearch, ...payload};
    },
    setTopPlaylistsLoading(state, payload) {
      state.loadingTopPlaylists = payload;
    },
    setHotCategoriesLoading(state, payload) {
      state.loadingHotCategories = payload;
    },
    setCommentLoading(state, payload) {
      state.loadingComment = payload;
    }
  },
  getters: {
    getClientWid: state => state.clientWid,
    getSheetLoading: state => state.loadingSheet,
    getBGLoading: state => state.loadingBG,
    getToplistsLoading: state => state.loadingToplists,
    getSearchLoading: state => state.loadingSearch,
    getTopPlaylistsLoading: state => state.loadingTopPlaylists,
    getHotCategoriesLoading: state => state.loadingHotCategories,
    getCommentLoading: state => state.loadingComment
  },

};

export default global;