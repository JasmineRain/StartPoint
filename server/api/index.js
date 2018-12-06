const qqAPI = require('./qq/index');
const neteaseAPI = require('./netease/index');
const xiamiAPI = require('./xiami/index');

const getSong = (req, res) => {
  switch (req.query.vendor) {
    case 'netease': return neteaseAPI.getSongUrl(req, res);
    case 'qq': return qqAPI.getSongUrl(req, res);
    case 'xiami': return xiamiAPI.getSongUrl(req, res);
  }
};






const musicAPI = {
  getSong
};

//export as musicAPI
module.exports = musicAPI;