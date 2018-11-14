//import axios from "axios";
//import { loading } from "element-ui";
const music = {
  state: {
    curMusic: {
      musicUrl: "",
      coverUrl: "",
      id: "",
      index: "",
      length: ""
    },
    player: "",
    lrc: "",
    lrcIndex: "",
    curTime: "00.00",
    isPlaying: false,
    playModel: 1,
    musicList: {},
    searchList: {},
    likeList: []
  },
  getters: {
    getCurMusic: state => state.curMusic,
    getPlayer: state => state.player,
    getLrc: state => state.lrc,
    getLrcIndex: state => state.lrcIndex,
    getCurTime: state => state.curTime,
    getIsPlaying: state => state.isPlaying,
    getPlayModel: state => state.playModel,
    getMusicList: state => state.musicList,
    getSearchList: state => state.searchList,
    getLikeLikst: state => state.likeList
  },
  mutations: {
    setCurMusic(state, payload) {
      state.curMusic = payload;
    },
    setPlayer(state, payload) {
      state.player = payload;
    },
    setLrc(state, payload) {
      state.lrc = payload;
    },
    setLrcIndex(state, payload) {
      state.lrcIndex = payload;
    },
    setCurTime(state, payload) {
      state.curTime = payload;
    },
    setIsPlaying(state, payload) {
      state.isPlaying = payload;
    },
    setPlayModel(state, payload) {
      state.playModel = payload;
    },
    setMusicList(state, payload) {
      state.musicList = payload;
    },
    setSearchList(state, payload) {
      state.searchList = payload;
    },
    setLikeList(state, payload) {
      state.likeList = payload;
    }
  },
  actions: {

  }
};

export default music;
