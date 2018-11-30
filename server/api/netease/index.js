const request = require('./util/request');

const getSong = (req, res) => {
  let question = require('./module/song_detail');
  let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});
  return question(query, request);
};






// export as neteaseAPI
module.exports = {getSong};