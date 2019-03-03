const request = require('./util/request');
const Base64 = require('../../public/javascripts/base64');
const musicUtil = require('../../public/javascripts/music');

const getSongUrl = (req, res) => {
  let question = require('./module/song_url');
  let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});

  //因Url获取和vkey相关，数据包装放在了./module/song_url中
  return question(query, request);
};

const getLyric = (req, res) => {
  return new Promise((resolve, reject) => {
    let question = require('./module/lyric');
    let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});
    question(query, request).then(answer => {

      //保存源数据 重新包装数据
      let rowData = answer;

      if (answer.status === 200) {
        let lyric = answer.body.split('"')[13];
        lyric = musicUtil.parseLyric(Base64.decode(lyric));
        answer.body = {
          lyric: lyric
        };
        resolve(answer);
      } else {
        reject("request origin failed");
      }
    })
    .catch(function (err) {
      reject("error qq api");
    })
  });
};

const search = (req, res) => {
  return new Promise((resolve, reject) => {
    let question = require('./module/search');
    let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});
    question(query, request).then(function (answer) {

      //保存源数据 重新包装数据
      let rowData = answer;

      if (answer.status === 200) {
        let data = answer.body.data;
        let list;
        let totalnum;
        switch (query.t) {
          case 'song':
            list = data.song.list;
            totalnum = data.song.totalnum;
            break;
          case 'lyric':
            list = data.lyric.list;
            totalnum = data.lyric.totalnum;
            break;
          case 'mv':
            list = data.mv.list;
            totalnum = data.mv.totalnum;
            break;
          case 'album':
            list = data.album.list;
            totalnum = data.album.totalnum;
            break;
          case 'singer':
            list = data.singer.list;
            totalnum = data.singer.totalnum;
            break;
          default:
            list = data.song.list;
            totalnum = data.song.totalnum;
            break;
        }
        answer.body = {
          list: list,
          totalnum: totalnum
        };
        resolve(answer);
      } else {
        reject("request origin failed");
      }
    })
    .catch(function (err) {
      reject("error at qq api");
    })
  });
};

const getAlbumCover = (req, res) => {
  let question = require('./module/album_cover');
  let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});

  //因Cover保存在缓存服务器中，不需要特殊请求，数据包装放在了./module/album_cover中
  return question(query, request);
};

module.exports = {getSongUrl, getLyric, search, getAlbumCover};