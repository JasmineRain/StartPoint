const global = {
  state: {
    clientWid: 0
  },
  mutations: {
    setGlobal(state, info) {
      state.clientWid = info.clientWid;
    }
  },
  getters: {
    getClientWid: state => state.clientWid
  },

};

export default global;