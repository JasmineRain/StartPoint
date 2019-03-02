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
  return new Promise((resolve, reject)=>{
    let question = require('./module/lyric');
    let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});
    question(query, request).then(answer => {

      //保存源数据 重新包装数据
      let rowData =answer;

      if(answer.status === 200){
        let lyric = answer.body.split('"')[13];
        lyric = musicUtil.parseLyric(Base64.decode(lyric));
        answer.body = {
          lyric: lyric
        };
        resolve(answer);
      } else {
        reject("request failed");
      }
    })
    .catch(function (err) {
      reject("error at module file");
    })
  });
};

const search = (req, res) => {
  let question = require('./module/search');
  let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});
  return question(query, request);
};



module.exports = {getSongUrl, getLyric, search};