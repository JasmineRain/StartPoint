const request = require('./util/request');

const getSongUrl = (req, res) => {
  let question = require('./module/song_url');
  let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});
  return question(query, request);
};






// export as neteaseAPI
module.exports = {getSongUrl};