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
    isPlaying: false,    //播放状态
    isDrag: false,       //是否拖动进度条
    playMode: 0,         //播放模式，1顺序，2随机，3单曲循环
    musicList: [],       //正在播放的歌曲列表
    musicSheetList: [],  //音乐显示列表，用于Sheet组件
    searchList: {},
    likeList: [],
    toplists: {},         //排行榜
    topplaylists: [],     //歌单推荐
    hotcategories: {},    //热门歌单分类
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
    getMusicSheetList: state => state.musicSheetList,
    getSearchList: state => state.searchList,
    getLikeList: state => state.likeList,
    getToplists: state => state.toplists,
    getTopPlaylists: state => state.topplaylists,
    getHotCategories: state => state.hotcategories
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
    setMusicSheetList(state, payload) {
      state.musicSheetList = payload;
    },
    setSearchList(state, payload) {
      state.searchList[payload.type] = payload.result;
    },
    setLikeList(state, payload) {
      state.likeList = payload;
    },
    setToplists(state, payload) {
      state.toplists[payload.vendor] = payload.list;
    },
    setTopPlaylists(state, payload) {
      state.topplaylists = payload;
    },
    setHotCategories(state, payload) {
      state.hotcategories[payload.vendor] = payload.list;
    }
  },
  actions: {
    getRecmList(context) {
      context.commit("setSheetLoading", true);
      let musicList = [];
      let params2 = {
        vendor: "netease",
        idx: 3778678
      };
      api.reqToplistDetail(params2).then(function (answer) {
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
        });
        context.commit("setMusicList", musicList);
        context.commit("setSheetLoading", false);
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

    getToplists(context, params) {
      context.commit("setToplistsLoading", true);
      api.reqToplists(params).then(function (answer) {
        context.commit("setToplists", {vendor: answer.vendor, list: answer.body.list});
        context.commit("setToplistsLoading", false);
      })
    },

    getSearchResult(context, params) {
      context.commit("setSearchLoading", true);
      api.reqSearch(params).then(function (answer) {
        context.commit("setSearchList", {type: params.t, result: answer.body});
        let payload = {};
        payload[params.t] = false;
        context.commit("setSearchLoading", payload);
      })
    },

    getToplistDetail(context, params) {
      context.commit("setSheetLoading", true);
      api.reqToplistDetail(params).then(function (answer) {
        let musicList = [];
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
            vendor: answer.vendor,
            index: index
          });
        });
        context.commit("setMusicSheetList", musicList);
        context.commit("setSheetLoading", false);
      })
    },

    getHotCategories(context, params) {
      context.commit("setHotCategoriesLoading", true);
      api.reqHotCategories(params).then(function (answer) {
        context.commit("setHotCategories", {vendor: answer.vendor, list: answer.body.category});
        context.commit("setHotCategoriesLoading", false);
        context.dispatch("getTopPlaylists", {vendor: "qq"});
      });
    },

    getTopPlaylists(context, params) {
      context.commit("setTopPlaylistsLoading", true);
      api.reqTopPlaylists(params).then(function (answer) {
        context.commit("setTopPlaylists", answer.body.lists);
        context.commit("setTopPlaylistsLoading", false);
      });
    },

    playNext(context, params) {
      context.dispatch("getMusicUrl", params.urlParams);
      context.dispatch("getMusicCover", params.coverParams);
      context.dispatch("getMusicLyric", params.lyricParams);
    },

    playPrevious(context, params) {
      context.dispatch("getMusicUrl", params.urlParams);
      context.dispatch("getMusicCover", params.coverParams);
      context.dispatch("getMusicLyric", params.lyricParams);
    }
  }
};

export default music;
