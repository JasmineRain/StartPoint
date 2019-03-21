import musicUtil from "../../common/js/music";
import api from "../api";

const music = {
  state: {
    currentMusic: {
      name: "",
      musicUrl: "",
      coverUrl: "",
      index: -1,
      singer: "",
      album: "",
      duration: 0,
      vendor: ""
    },
    player: '',
    lyric: "",
    lyricIndex: "",
    lyricContent: "",
    currentTime: 0,      //当前播放时间（秒）
    currentDuration: 0,  //当前播放百分比
    buffered: 0,         //已缓冲（0-100）
    isPlaying: false,
    isDrag: false,
    playMode: 1,
    musicList: [],
    searchList: {},
    likeList: []
  },
  getters: {
    getCurrentMusic: state => state.currentMusic,
    getPlayer: state => state.player,
    getLyric: state => state.lyric,
    getLyricIndex: state => state.lyricIndex,
    getLyricContent: state => state.lyricContent,
    getCurrentTime: state => state.currentTime,
    getCurrentDuration: state => state.currentDuration,
    getBuffered: state => state.buffered,
    getIsPlaying: state => state.isPlaying,
    getIsDrag: state => state.isDrag,
    getPlayMode: state => state.playMode,
    getMusicList: state => state.musicList,
    getSearchList: state => state.searchList,
    getLikeLikst: state => state.likeList
  },
  mutations: {
    setCurrentMusic(state, payload) {
      state.currentMusic = { ...state.currentMusic, ...payload};
    },
    setPlayer(state, payload) {
      state.player = payload;
    },
    setLyric(state, payload) {
      state.lyric = payload;
    },
    setLyricIndex(state, payload) {
      state.lyricIndex = payload;
    },
    setLyricContent(state, payload) {
      state.lyricContent = payload;
    },
    setCurrentTime(state, payload) {
      state.currentTime = payload;
    },
    setCurrentDuration(state, payload) {
      state.currentDuration = payload;
    },
    setBuffered(state, payload) {
      state.buffered = payload;
    },
    setIsPlaying(state, payload) {
      state.isPlaying = payload;
    },
    setIsDrag(state, payload) {
      state.isDrag = payload;
    },
    setPlayMode(state, payload) {
      state.playMode = payload;
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
    getRecmList(context) {
      let musicList = [];
      let params1 = {
        vendor: "qq",
        idx: 4
      };
      let params2 = {
        vendor: "netease",
        idx: 1
      };
      // api.reqTopListDetail(params1).then(function (answer) {
      //   answer.body.songs.forEach(function (item, index) {
      //     musicList.push({
      //       song: {
      //         name: item.song.name,
      //         id: item.song.id,
      //         mid: item.song.mid,
      //         duration: item.song.duration,
      //         time: musicUtil.formatDuration(item.song.duration)
      //       },
      //       singer: item.singer,
      //       album: {
      //         name: item.album.name,
      //         id: item.album.id,
      //         mid: item.album.mid,
      //         desc: item.album.desc
      //       },
      //       vendor: 'qq',
      //       index: index
      //     });
      //     context.commit("setMusicList", musicList);
      //   })
      // });
      api.reqTopListDetail(params2).then(function (answer) {
        answer.body.songs.forEach(function (item, index) {
          musicList.push({
            song: {
              name: item.song.name,
              id: item.song.id,
              mid: item.song.mid,
              duration: item.song.duration,
              time: musicUtil.formatDuration(item.song.duration)
            },
            singer: item.singer,
            album: {
              name: item.album.name,
              id: item.album.id,
              mid: item.album.mid,
              desc: item.album.desc
            },
            vendor: 'netease',
            index: index
          });
          context.commit("setMusicList", musicList);
        })
      })
    },

    getMusicUrl(context, params) {
      context.commit("setIsPlaying", false);
      context.commit("setLyric", "");
      api.reqSongUrl(params).then(function (answer) {
        context.commit("setCurrentMusic", {
          musicUrl: answer.body.url
        });
        context.commit("setIsPlaying", true);
      })
    },

    getMusicCover(context, params) {
      api.reqAlbumCover(params).then(function (answer) {
        context.commit("setCurrentMusic", {
          coverUrl: answer.body.url
        })
      })
    },

    getMusicLyric(context, params) {
      api.reqLyric(params).then(function (answer) {
        context.commit("setLyric", answer.body.lyric)
      })
    },

    playNext(context, params) {
      this.dispatch("getMusicUrl", params);
    },
    playPrevious(context, params) {
      this.dispatch("getMusicUrl", params);
    }
  }
};

export default music;
