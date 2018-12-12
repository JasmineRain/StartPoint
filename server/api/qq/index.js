const request = require('./util/request');
const Parser = require('./util/lyric_parser');
const LP = new Parser();

const getSongUrl = (req, res) => {
  let question = require('./module/song_url');
  let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});
  return question(query, request);
};

const getLyric = (req, res) => {
  return new Promise((resolve, reject)=>{
    let question = require('./module/lyric');
    let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});
    question(query, request).then(answer => {
      if(answer.status === 200){
        let body = answer.body;
        answer.body = { lyric:LP.decode(body.substring(body.indexOf("lyric")+8,body.length-3)) };
        resolve(answer);
      } else {
        reject(answer);
      }
    });
  });
};

const search = (req, res) => {
  let question = require('./module/search');
  let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});
  return question(query, request);
};



module.exports = {getSongUrl, getLyric, search};