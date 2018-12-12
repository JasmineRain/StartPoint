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

const getLyric = (req, res) => {
  switch (req.query.vendor) {
    case 'netease': return neteaseAPI.getLyric(req, res);
    case 'qq': return qqAPI.getLyric(req, res);
    case 'xiami': return xiamiAPI.getLyric(req, res);
  }
};

const search = (req, res) => {
  switch (req.query.vendor) {
    case 'netease': return neteaseAPI.search(req, res);
    case 'qq': return qqAPI.search(req, res);
    case 'xiami': return xiamiAPI.search(req, res);
  }
};


const musicAPI = {
  getSong,
  getLyric,
  search
};





module.exports = musicAPI;