const qqAPI = require('./qq/index');
const neteaseAPI = require('./netease/index');
const xiamiAPI = require('./xiami/index');

const getSong = (req, res) => {
  return neteaseAPI.getSong(req, res);
};






const musicAPI = {
  getSong
};

//export as musicAPI
module.exports = musicAPI;