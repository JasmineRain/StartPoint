const qqAPI = require('./qq/index');
const neteaseAPI = require('./netease/index');
const xiamiAPI = require('./xiami/index');

const getSongUrl = (req, res) => {
  switch (req.query.vendor) {
    case 'netease':
      return neteaseAPI.getSongUrl(req, res);
    case 'qq':
      return qqAPI.getSongUrl(req, res);
    case 'xiami':
      return xiamiAPI.getSongUrl(req, res);
  }
};

const getLyric = (req, res) => {
  switch (req.query.vendor) {
    case 'netease':
      return neteaseAPI.getLyric(req, res);
    case 'qq':
      return qqAPI.getLyric(req, res);
    case 'xiami':
      return xiamiAPI.getLyric(req, res);
  }
};

const search = (req, res) => {
  return new Promise((resolve, reject) => {
    let answerQQ = qqAPI.search(req, res);
    let answerNetease = neteaseAPI.search(req, res);
    //let answerXiami = xiamiAPI.search(req, res);
    Promise.all([answerQQ, answerNetease]).then(values => {
      let answer = {
        //cookie
        status: 500,
        body: {},
        totalnum: 0,
        vendornum: 0
      };
      values.forEach(function (value) {
        answer.body[value.vendor] = value.body.list;
        answer.totalnum += value.body.totalnum;
        answer.vendornum ++;
      });
      answer.status = 200;
      resolve(answer);
    })
    .catch(function (err) {
      reject("error at search request");
    })
  })
};

const getAlbumCover = (req, res) => {
  switch (req.query.vendor) {
    case 'netease':
      return neteaseAPI.getAlbumCover(req, res);
    case 'qq':
      return qqAPI.getAlbumCover(req, res);
    case 'xiami':
      return xiamiAPI.search(req, res);
  }
};

const getAlbumDetail = (req, res) => {
  switch (req.query.vendor) {
    case 'netease':
      return neteaseAPI.getAlbumDetail(req, res);
    case 'qq':
      return qqAPI.getAlbumDetail(req, res);
    case 'xiami':
      return xiamiAPI.getAlbumDetail(req, res);
  }
};

const getPlaylistDetail = (req, res) => {
  switch (req.query.vendor) {
    case 'netease':
      return neteaseAPI.getPlaylistDetail(req, res);
    case 'qq':
      return qqAPI.getPlaylistDetail(req, res);
    case 'xiami':
      return xiamiAPI.getAlbumDetail(req, res);
  }
};

const musicAPI = {
  getSongUrl,
  getLyric,
  search,
  getAlbumCover,
  getAlbumDetail,
  getPlaylistDetail
};


module.exports = musicAPI;