const request = require('./util/request');
const musicUtil = require('../../public/javascripts/music');

const getSongUrl = (req, res) => {
  return new Promise((resolve, reject) => {
    let question = require('./module/song_url');
    let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});
    question(query, request).then(answer => {

      //保存源返回值，重新包装数据
      let rowData = answer;

      if (answer.status === 200) {
        let bd = answer.body.data[0];
        answer.body = {
          url: bd.url
        };
        resolve(answer);
      } else {
        reject("request failed")
      }
    })
    .catch(function (err) {
      reject("error netease api" + err);
    })
  })
};

const getLyric = (req, res) => {
  return new Promise((resolve, reject) => {
    let question = require('./module/lyric');
    let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});
    question(query, request).then(answer => {

      //保存源返回值，重新包装数据
      let rowData = answer;

      if (answer.status === 200) {
        let lyric = musicUtil.parseLyric(answer.body.lrc.lyric);
        answer.body = {
          lyric: lyric
        };
        resolve(answer);
      } else {
        reject("request failed")
      }
    })
    .catch(function (err) {
      reject("error netease api" + err);
    })
  })
};

const search = (req, res) => {
  return new Promise((resolve, reject) => {
    let question = require('./module/search');
    let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});
    question(query, request).then(function (answer) {

      //保存源返回值，重新包装数据
      let rowData = answer;

      if (answer.status === 200) {
        let result = answer.body.result;
        let list;
        let totalnum;
        switch (query.t) {
          case 'song':
            list = result.songs;
            totalnum = result.songCount;
            break;
          case 'lyric':
            list = result.songs;
            totalnum = result.songCount;
            break;
          case 'mv':
            list = result.mvs;
            totalnum = result.mvCount;
            break;
          case 'album':
            list = result.albums;
            totalnum = result.albumCount;
            break;
          case 'singer':
            list = result.artists;
            totalnum = result.artistCount;
            break;
          case 'fm':
            list = result.djRadios;
            totalnum = result.djRadiosCount;
            break;
          case 'user':
            list = result.userprofiles;
            totalnum = result.userprofileCount;
            break;
          case 'playlist':
            list = result.playlists;
            totalnum = result.playlistCount;
            break;
          case 'video':
            list = result.videos;
            totalnum = result.videoCount;
            break;
          default:
            list = result.songs;
            totalnum = result.songCount;
            break;
        }
        answer.body = {
          list: list,
          totalnum: totalnum
        };
        resolve(answer)
      } else {
        reject("request failed");
      }
    })
    .catch(function (err) {
      reject("error netease api" + err);
    })
  })
};

const getAlbumCover = (req, res) => {
  return new Promise((resolve, reject) => {
    let question = require('./module/album');
    let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});
    question(query, request).then(answer => {

      //保存源返回值，重新包装数据
      let rowData = answer;
      if(answer.status === 200) {
        let url = answer.body.album.picUrl;
        answer.body = {
          url: url
        };
        resolve(answer);
      } else {
        reject("request failed");
      }
    })
    .catch(function (err) {
      reject("error netease api" + err);
    })
  })
};

const getAlbumDetail = (req, res) => {
  return new Promise((resolve, reject) => {
    let question = require('./module/album');
    let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});
    question(query, request).then(answer => {

      //保存源返回值，重新包装数据
      let rowData = answer;

      if(answer.status === 200) {
        let album = {
          paid: answer.body.album.paid,
          name: answer.body.album.name,
          desc: answer.body.album.description,
          id: answer.body.album.id,
        };
        let singer = {
          name: answer.body.album.artist.name,
          id: answer.body.album.artist.id
        };
        let songs = [];
        answer.body.songs.forEach(function (song) {
          songs.push({
            name: song.name,
            id: song.id
          })
        });
        let total = songs.length;
        answer.body = {
          album,
          singer,
          songs,
          total
        };
        resolve(answer);
      } else {
        reject("request failed");
      }
    })
    .catch(function (err) {
      reject("error netease api" + err);
    })
  })
};

const getPlaylistDetail = (req, res) => {
  return new Promise((resolve, reject) => {
    let question = require('./module/playlist_detail');
    let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});
    question(query, request).then(answer => {

      //保存源返回值，重新包装数据
      let rowData = answer;

      if(answer.status === 200) {
        let total = answer.body.playlist.trackCount;
        let list = {
          name: answer.body.playlist.name,
          cover: answer.body.playlist.coverImgUrl,
          id: answer.body.playlist.id,
          desc: answer.body.playlist.description
        };
        let creator = {
          name: answer.body.playlist.creator.nickname,
          signature: answer.body.playlist.creator.signature,
          desc: answer.body.playlist.creator.description,
          avatar: answer.body.playlist.creator.avatarUrl,
          id: answer.body.playlist.creator.userId
        };
        let songs = [];
        answer.body.playlist.tracks.forEach(function (track) {
          let ar = [];
          track.ar.forEach(function (item) {
            ar.push({
              id: item.id,
              name: item.name
            })
          });
          songs.push({
            song: {
              name: track.name,
              id: track.id
            },
            album: {id: track.al.id, name: track.al.name, picUrl: track.al.picUrl},
            singer: ar
          })
        });
        answer.body = {
          creator,
          list,
          songs,
          total
          //privileges
        };
        resolve(answer)
      } else {
        reject("request failed");
      }
    })
    .catch(function (err) {
      reject("error netease api" + err);
    })
  })
};

const getTopListDetail = (req, res) => {
  return new Promise((resolve, reject) => {
    let question = require('./module/top_list');
    let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});
    question(query, request).then(answer => {

      //保存源返回值，重新包装数据
      let rowData = answer;
      if(answer.status === 200) {
        let creator = {
          name: answer.body.playlist.creator.nickname,
          signature: answer.body.playlist.creator.signature,
          desc: answer.body.playlist.creator.description,
          avatar: answer.body.playlist.creator.avatarUrl,
          id: answer.body.playlist.creator.userId
        };
        let list = {
          name: answer.body.playlist.name,
          id: answer.body.playlist.id,
          cover: answer.body.playlist.coverImgUrl,
          desc: answer.body.playlist.description
        };
        let total = answer.body.playlist.trackCount;
        let songs = [];
        answer.body.playlist.tracks.forEach(function (track) {
          let ar = [];
          track.ar.forEach(function (item) {
            ar.push({
              id: item.id,
              name: item.name
            })
          });
          songs.push({
            song: {
              name: track.name,
              id: track.id
            },
            album: {id: track.al.id, name: track.al.name, picUrl: track.al.picUrl},
            singer: ar
          })
        });
        answer.body = {
          creator,
          list,
          songs,
          total
        };
        resolve(answer)
      } else {
        reject("request failed");
      }
    })
    .catch(function (err) {
      reject("error netease api" + err);
    })
  })
};

const getTopLists = (req, res) => {
  return new Promise((resolve, reject) => {
    let question = require('./module/toplist');
    let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});
    question(query, request).then(answer => {

      //保存源返回值，重新包装数据
      let rowData = answer;
      if(answer.status === 200) {
        let list = [];
        answer.body.list.forEach(function (item) {
          list.push({
            name: item.name,
            id: item.id,
            desc: item.description,
            play: item.playCount,
            cover: item.coverImgUrl
          })
        });
        answer.body = {
          list
        };
        resolve(answer);
      } else {
        reject("request failed");
      }
    })
    .catch(function (err) {
      reject("error netease api" + err);
    })
  })
};

module.exports = {
  getSongUrl, getLyric, search, getAlbumCover, getAlbumDetail, getPlaylistDetail,
  getTopListDetail, getTopLists
};