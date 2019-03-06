const request = require('./util/request');
const Base64 = require('../../public/javascripts/base64');
const musicUtil = require('../../public/javascripts/music');

const getSongUrl = (req, res) => {
  return new Promise((resolve, reject) => {
    let question = require('./module/song_url');
    let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});

    question(query, request).then(answer => {
      if(answer.status === 200) {
        let item = answer.body.data.items[0];
        let url = `http://dl.stream.qqmusic.qq.com/C400${item.songmid}.m4a?vkey=${item.vkey}&guid=133371174&fromtag=66`;
        answer.body = {
          url: url
        };
        resolve(answer);
      } else {
        reject("request origin failed");
      }
    })
    .catch(function (err) {
      reject("error qq api");
    })
  })
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

const getAlbumDetail = (req, res) => {
  return new Promise((resolve, reject) => {
    let question = require('./module/album');
    let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});
    question(query, request).then(answer => {

      //保存源数据 重新包装数据
      let rowData = answer;

      if(answer.status === 200) {

        //保存源返回值，重新包装数据
        let rowData = answer;

        if(answer.status === 200) {
          let paid = answer.body.data.list[0].pay.payalbum;
          let des = answer.body.data.desc;
          let album = answer.body.data.name;
          let albumid = answer.body.data.id;
          let albummid = answer.body.data.mid;
          let singer = answer.body.data.singername;
          let singerid = answer.body.data.singerid;
          let singermid = answer.body.data.singermid;
          let songs = [];
          answer.body.data.list.forEach(function (song) {
            songs.push({
              name: song.songname,
              id: song.singid,
              mid:song.songmid
            })
          });
          let num = songs.length;

          answer.body = {
            paid,
            des,
            album,
            albumid,
            albummid,
            singer,
            singerid,
            singermid,
            songs,
            num
          };
        }
        resolve(answer);
      } else {
        reject("request origin failed");
      }
    })
    .catch(function (err) {
      reject("error qq api");
    })
  })

};

module.exports = {getSongUrl, getLyric, search, getAlbumCover, getAlbumDetail};