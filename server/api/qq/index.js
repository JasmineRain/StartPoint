const request = require('./util/request');
//const song_url = require('./module/song_url');


const getSongUrl = (req, res) => {
  let question = require('./module/song_vkey');
  let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});
  return question(query, request);
  // return song_url(req, res)
};






// export as qqAPI
module.exports = {getSongUrl};