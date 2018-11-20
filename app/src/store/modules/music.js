import axios from "axios";
//import { loading } from "element-ui";

const QQTopList =
  "/QQMusicAPI/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8%C2%ACice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=27&_=1519963122923";

const QQRecmList =
  "/QQMusicAPI/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8%C2%ACice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=36&_=1520777874472";

const QQvkey =
  "QQMusicAPI/base/fcgi-bin/fcg_music_express_mobile3.fcg?g_tk=1278911659&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&cid=205361747&uin=0&guid=133371174";

const QQCover = "http://imgcache.qq.com/music/photo/album_300/";

// "http://imgcache.qq.com/music/photo/album_300/%i/300_albumpic_%i_0.jpg"
const getQQvkey = function(mid) {
  let url = QQvkey + "&songmid=" + mid + "&filename=C400" + mid + ".m4a";
  return new Promise(resolve => {
    axios.get(url).then(response => {
      console.log(response.data);
      resolve(response.data.data.items[0].vkey);
    });
  });
};

const getQQsrc = function(mid) {
  return new Promise(resolve => {
    getQQvkey(mid).then(function(vkey) {
      console.log("got vkey = " + vkey);
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

const getQQcover = function(id) {
  return QQCover + (id % 100) + "/300_albumpic_" + id + "_0.jpg";
};

const formatDuration = function(interval) {
  let min = parseInt(interval / 60)
    .toString()
    .padStart(2, "0");
  let sec = (interval % 60).toString().padStart(2, "0");

  return min + ":" + sec;
};

const music = {
  state: {
    curMusic: {
      musicUrl: "",
      coverUrl: "",
      mid: "",
      index: "",
      duration: "",
      singer: "",
      album: "",
      name: ""
    },
    player: "",
    lrc: "",
    lrcIndex: "",
    curTime: "00.00",
    isPlaying: false,
    playModel: 1,
    musicList: [
      // {
      //   songname: "",
      //   songmid: "",
      //   albummid: "",
      //   albumname: "",
      //   singer: "",
      //   singermid: "",
      //   duration: "",
      // }
    ],
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
    getQQTopList: function(context) {
      axios.get(QQTopList).then(response => {
        //console.log(response.data);
        let songList = response.data.songlist;
        let musicList = [];
        for (let song in songList) {
          musicList.push({
            songname: songList[song].data.songname,
            songmid: songList[song].data.songmid,
            albumid: songList[song].data.albumid,
            albummid: songList[song].data.albummid,
            albumname: songList[song].data.albumname,
            singer: songList[song].data.singer[0].name,
            singermid: songList[song].data.singer[0].mid,
            duration: formatDuration(songList[song].data.interval)
          });
        }
        context.commit("setMusicList", musicList);
      });
    },
    getQQMusicDetail: function(context, row) {
      let cover = getQQcover(row.albumid);
      getQQsrc(row.songmid).then(function(src) {
        context.commit("setCurMusic", {
          musicUrl: src,
          coverUrl: cover,
          mid: row.songmid,
          index: "1",
          duration: row.duration,
          singer: row.singer,
          album: row.albumname,
          name: row.songname
        });
      });
    }
  }
};

export default music;
