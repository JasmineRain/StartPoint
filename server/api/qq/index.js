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
      reject("error qq api" + err);
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
        let lyric = answer.body.lyric;
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
      reject("error qq api" + err);
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
      reject("error at qq api" + err);
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
          let album = {
            name: answer.body.data.name,
            id: answer.body.data.id,
            mid: answer.body.data.mid,
            desc: answer.body.data.desc,
            paid: answer.body.data.list[0].pay.payalbum
          };

          let singer = {
            name: answer.body.data.singername,
            id: answer.body.data.singerid,
            mid: answer.body.data.singermid
          };

          let songs = [];

          answer.body.data.list.forEach(function (song) {
            songs.push({
              name: song.songname,
              id: song.singid,
              mid:song.songmid
            })
          });

          let total = songs.length;

          answer.body = {
            album,
            singer,
            songs,
            total
          };
        }
        resolve(answer);
      } else {
        reject("request origin failed");
      }
    })
    .catch(function (err) {
      reject("error qq api" + err);
    })
  })

};

const getPlaylistDetail = (req, res) => {
  return new Promise((resolve, reject) => {
    let question = require('./module/playlist_detail');
    let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});
    question(query, request).then(answer => {

      //保存源数据 重新包装数据
      let rowData = answer;

      if (answer.status === 200) {
        let list = {
          name: answer.body.cdlist[0].dissname,
          id: answer.body.cdlist[0].disstid,
          cover: answer.body.cdlist[0].logo,
          desc: answer.body.cdlist[0].desc
        };
        let creator = {
          name: answer.body.cdlist[0].nickname,
          avatar: answer.body.cdlist[0].headurl,
          id: answer.body.cdlist[0].uin
        };
        let songs = [];

        let total = answer.body.cdlist[0].songnum;

        answer.body.cdlist[0].songlist.forEach(function (song) {
          songs.push({
            song: {
              name: song.songname,
              mid: song.songmid,
              id: song.songid,
            },
            album: {
              name: song.albumname,
              id: song.albumid,
              mid: song.albummid,
              desc: song.albumdesc,
            },
            singer: song.singer
          })
        });

        answer.body = {
          creator,
          list,
          songs,
          total
        };
        resolve(answer);
      } else {
        reject("request origin failed");
      }
    })
    .catch(function (err) {
      reject("error qq api\n" + err);
    })
  })
};

const getTopListDetail = (req, res) => {
  return new Promise((resolve, reject) => {
    let question = require('./module/top_list');
    let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});
    question(query, request).then(answer => {

      //保存源数据 重新包装数据
      let rowData = answer;

      if (answer.status === 200) {

        let creator = {
          name: "QQ音乐",
          desc: "QQ音乐巅峰榜推荐"
        };
        let total = answer.body.total_song_num;
        let songs = [];
        answer.body.songlist.forEach(function (song) {
          songs.push({
            album: {
              desc: song.data.albumdesc,
              id: song.data.albumid,
              mid: song.data.albummid,
              name: song.data.albumname
            },
            singer: song.data.singer,
            song: {
              name: song.data.songname,
              id: song.data.songid,
              mid: song.data.songmid
            }
          })
        });

        // answer.body = {
        //   total,
        //   songs
        // };

        resolve(answer);
      } else {
        reject("request origin failed");
      }
    })
    .catch(function (err) {
      reject("error qq api\n" + err);
    })
  })
};

//toplist
//userinfo
//artist songs
//mv

module.exports = {
  getSongUrl, getLyric, search, getAlbumCover, getAlbumDetail, getPlaylistDetail,
  getTopListDetail
};