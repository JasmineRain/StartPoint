const request = require('./util/request');

const getSongUrl = (req, res) => {
  let question = require('./module/song_url');
  let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});
  return question(query, request);
};

const getLyric = (req, res) => {
  let question = require('./module/lyric');
  let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});
  return question(query, request);
};

const search = (req, res) => {
  let question = require('./module/search');
  let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});
  return question(query, request);
};

module.exports = {getSongUrl, getLyric, search};