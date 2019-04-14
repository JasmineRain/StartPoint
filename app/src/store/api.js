import axios from 'axios'

const api = {

  SERVER_ADDRESS : "http://localhost:8081",
  PATH_SONG_URL: "/music/song_url",
  PATH_LYRIC: "/music/lyric",
  PATH_SEARCH: "/music/search",
  PATH_ALBUM_COVER: "/music/album_cover",
  PATH_ALBUM_DETAIL: "/music/album",
  PATH_PLAYLIST_DETAIL: "/music/playlist",
  PATH_TOPLISTS: "/music/toplists",
  PATH_TOPLIST_DETAIL: "/music/toplist",
  PATH_USER_PLAYLISTS: "/music/userplaylists",
  PATH_HOT_CATEGORIES: "/music/hotcategories",
  PATH_HOT_PLAYLISTS: "/music/topplaylists",

  reqSongUrl(params) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: api.SERVER_ADDRESS + api.PATH_SONG_URL,
        params: params
      })
      .then(function (answer) {
        resolve(answer.data);
      })
      .catch(function (error) {
        reject(error);
      })
    })
  },

  reqLyric(params) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: api.SERVER_ADDRESS + api.PATH_LYRIC,
        params: params
      })
      .then(function (answer) {
        resolve(answer.data);
      })
      .catch(function (error) {
        reject(error);
      })
    })
  },

  reqSearch(params) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: api.SERVER_ADDRESS + api.PATH_SEARCH,
        params: params
      })
      .then(function (answer) {
        resolve(answer.data);
      })
      .catch(function (error) {
        reject(error);
      })
    })
  },

  reqAlbumCover(params) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: api.SERVER_ADDRESS + api.PATH_ALBUM_COVER,
        params: params
      })
      .then(function (answer) {
        resolve(answer.data);
      })
      .catch(function (error) {
        reject(error);
      })
    })
  },

  reqAlbumDetail(params) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: api.SERVER_ADDRESS + api.PATH_ALBUM_DETAIL,
        params: params
      })
      .then(function (answer) {
        resolve(answer.data);
      })
      .catch(function (error) {
        reject(error);
      })
    })
  },

  reqPlaylistDetail(params) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: api.SERVER_ADDRESS + api.PATH_PLAYLIST_DETAIL,
        params: params
      })
      .then(function (answer) {
        resolve(answer.data);
      })
      .catch(function (error) {
        reject(error);
      })
    })
  },

  reqToplistDetail(params) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: api.SERVER_ADDRESS + api.PATH_TOPLIST_DETAIL,
        params: params
      })
      .then(function (answer) {
        resolve(answer.data);
      })
      .catch(function (error) {
        reject(error);
      })
    })
  },

  reqToplists(params) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: api.SERVER_ADDRESS + api.PATH_TOPLISTS,
        params: params
      })
      .then(function (answer) {
        resolve(answer.data);
      })
      .catch(function (error) {
        reject(error);
      })
    })
  },

  reqUserPlaylists(params) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: api.SERVER_ADDRESS + api.PATH_USER_PLAYLISTS,
        params: params
      })
      .then(function (answer) {
        resolve(answer.data);
      })
      .catch(function (error) {
        reject(error);
      })
    })
  },

  reqHotCategories(params) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: api.SERVER_ADDRESS + api.PATH_HOT_CATEGORIES,
        params: params
      })
      .then(function (answer) {
        resolve(answer.data);
      })
      .catch(function (error) {
        reject(error);
      })
    })
  },

  reqTopPlaylists(params) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: api.SERVER_ADDRESS + api.PATH_HOT_PLAYLISTS,
        params: params
      })
      .then(function (answer) {
        resolve(answer.data);
      })
      .catch(function (error) {
        reject(error);
      })
    })
  },

};

export default api;