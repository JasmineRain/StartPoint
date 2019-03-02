const request = require('./util/request');
const musicUtil = require('../../public/javascripts/music');

const getSongUrl = (req, res) => {
  return new Promise((resolve, reject) => {
    let question = require('./module/song_url');
    let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});
    question(query, request).then(answer => {

      //保存源返回值，重新包装数据
      let rowData = answer;

      let bd = answer.body.data[0];
      answer.body = {
        url: bd.url
      };
      resolve(answer);
    });
  } )
};

const getLyric = (req, res) => {
  return new Promise((resolve, reject) => {
    let question = require('./module/lyric');
    let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});
    question(query, request).then(answer => {

      //保存源返回值，重新包装数据
      let rowData = answer;

      if(answer.status === 200) {
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
      reject("error at module file");
    })
  })
};

const search = (req, res) => {
  let question = require('./module/search');
  let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});
  return question(query, request);
};

module.exports = {getSongUrl, getLyric, search};