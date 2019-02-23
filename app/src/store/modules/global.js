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
    getGlobal: state => state.clientWid
  },

};

export default global;