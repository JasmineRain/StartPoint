import axios from "axios";
import musicUtil from "../../common/js/music";

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
      //console.log(response.data);
      resolve(response.data.data.items[0].vkey);
    });
  });
};

const getQQsrc = function (mid) {
  return new Promise(resolve => {
    getQQvkey(mid).then(function (vkey) {
      //console.log("got vkey = " + vkey);
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
      let lrc = info.substring(info.indexOf("lyric") + 8, info.length - 3);
      resolve(lrc);
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
    lrc: "",
    lrcIndex: "",
    currentTime: 0,
    currentDuration: 0,
    buffered: 0,
    isPlaying: false,
    playMode: 1,
    musicList: [],
    searchList: {},
    likeList: []
  },
  getters: {
    getCurrentMusic: state => state.currentMusic,
    getPlayer: state => state.player,
    getLrc: state => state.lrc,
    getLrcIndex: state => state.lrcIndex,
    getCurrentTime: state => state.currentTime,
    getCurrentDuration: state => state.currentDuration,
    getBuffered: state => state.buffered,
    getIsPlaying: state => state.isPlaying,
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
    setLrc(state, payload) {
      state.lrc = payload;
    },
    setLrcIndex(state, payload) {
      state.lrcIndex = payload;
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
      let cover = getQQcover(row.albumid);
      context.commit("setIsPlaying", false);
      getQQsrc(row.songmid).then(function (src) {
        context.commit("setCurrentMusic", {
          name: row.songname,
          musicUrl: src,
          coverUrl: cover,
          index: row.index,
          singer: row.singer,
          album: row.albumname,
          duration: row.duration
        });
        context.commit("setIsPlaying", true);
      });
      // getQQlyric(row.songid).then(function (lyric) {
      //   console.log(lyric);
      // });
    },
    playNext(context, index) {
      context.commit("setIsPlaying", false);
      let nextMusic = context.getters.getMusicList[index];
      let cover = getQQcover(nextMusic.albumid);
      getQQsrc(nextMusic.songmid).then(function (src) {
        context.commit("setCurrentMusic", {
          name: nextMusic.songname,
          musicUrl: src,
          coverUrl: cover,
          index: nextMusic.index,
          singer: nextMusic.singer,
          album: nextMusic.albumname,
          duration: nextMusic.duration
        });
        context.commit("setIsPlaying", true);
      });
    },
    playPrevious(context, index) {
      context.commit("setIsPlaying", false);
      let preMusic = context.getters.getMusicList[index];
      let cover = getQQcover(preMusic.albumid);
      getQQsrc(preMusic.songmid).then(function (src) {
        context.commit("setCurrentMusic", {
          name: preMusic.songname,
          musicUrl: src,
          coverUrl: cover,
          index: preMusic.index,
          singer: preMusic.singer,
          album: preMusic.albumname,
          duration: preMusic.duration
        });
        context.commit("setIsPlaying", true);
      });
    }
  }
};

export default music;
