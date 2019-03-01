import axios from "axios";
import musicUtil from "../../common/js/music";
import Base64 from "../../common/js/base64";

const QQTopList =
  "/QQMusicAPI/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=27&_=1519963122923";

// const QQRecmList =
//   "/QQMusicAPI/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8%C2%ACice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=36&_=1520777874472";

const QQLyric = "/QQMusicLrc/music/lyric/";

const QQvkey =
  "QQMusicAPI/base/fcgi-bin/fcg_music_express_mobile3.fcg?g_tk=1278911659&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&cid=205361747&uin=0&guid=133371174";

const QQCover = "http://imgcache.qq.com/music/photo/album_300/";

// "http://imgcache.qq.com/music/photo/album_300/%i/300_albumpic_%i_0.jpg"
const getQQvkey = function (mid) {
  let url = QQvkey + "&songmid=" + mid + "&filename=C400" + mid + ".m4a";
  return new Promise(resolve => {
    axios.get(url).then(response => {
      resolve(response.data.data.items[0].vkey);
    });
  });
};

const getQQsrc = function (mid) {
  return new Promise(resolve => {
    getQQvkey(mid).then(function (vkey) {
      let src =
        "http://dl.stream.qqmusic.qq.com/C400" +
        mid +
        ".m4a?vkey=" +
        vkey +
        "&guid=133371174&fromtag=66";
      resolve(src);
    });
  });
};

const getQQcover = function (id) {
  return QQCover + (id % 100) + "/300_albumpic_" + id + "_0.jpg";
};

//https://api.darlin.me/music/lyric/"+获取的音乐id+"/?
const getQQlyric = function (id) {
  let url = QQLyric + id + "/";
  return new Promise(resolve => {
    axios.get(url).then(response => {
      let info = response.data;
      let lyric = info.substring(info.indexOf("lyric") + 8, info.length - 3);
      let parsedLyric = musicUtil.parseLyric(Base64.decode(lyric))
      resolve(parsedLyric);
    });
  });
};

const music = {
  state: {
    currentMusic: {
      name: "",
      musicUrl: "",
      coverUrl: "",
      index: -1,
      singer: "",
      album: "",
      duration: 0
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
      state.currentMusic = payload;
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
    getQQTopList(context) {
      axios.get(QQTopList).then(response => {
        let songList = response.data.songlist;
        let musicList = [];
        for (let song in songList) {
          musicList.push({
            songname: songList[song].data.songname,
            songmid: songList[song].data.songmid,
            songid: songList[song].data.songid,
            albumid: songList[song].data.albumid,
            albummid: songList[song].data.albummid,
            albumname: songList[song].data.albumname,
            singer: songList[song].data.singer[0].name,
            singermid: songList[song].data.singer[0].mid,
            duration: songList[song].data.interval,
            time: musicUtil.formatDuration(songList[song].data.interval),
            index: parseInt(song)
          });
        }
        context.commit("setMusicList", musicList);
      });
    },
    getQQMusicDetail(context, row) {
      context.commit("setIsPlaying", false);
      context.commit("setLyric", "");
      let cover = getQQcover(row.albumid);
      let src = getQQsrc(row.songmid);
      Promise.all([cover, src]).then(function (values) {
        context.commit("setCurrentMusic", {
          name: row.songname,
          musicUrl: values[1],
          coverUrl: values[0],
          index: row.index,
          singer: row.singer,
          album: row.albumname,
          duration: row.duration
        });
        context.commit("setIsPlaying", true);
      });
      getQQlyric(row.songid).then(function (lyric) {
        context.commit("setLyric",lyric)
      })
    },
    playNext(context, index) {
      let nextMusic = context.getters.getMusicList[index];
      this.dispatch("getQQMusicDetail", nextMusic);
    },
    playPrevious(context, index) {
      //context.commit("setIsPlaying", false);
      let preMusic = context.getters.getMusicList[index];
      this.dispatch("getQQMusicDetail", preMusic);
    }
  }
};

export default music;
