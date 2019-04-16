const qqAPI = require('./qq/index');
const neteaseAPI = require('./netease/index');
const xiamiAPI = require('./xiami/index');

const checkMusic = (req, res) => {
  switch (req.query.vendor) {
    case 'netease':
      return neteaseAPI.checkMusic(req, res);
    case 'qq':
      return qqAPI.checkMusic(req, res);
    case 'xiami':
      return xiamiAPI.checkMusic(req, res);
  }
};

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
        //answer.body[value.vendor] = value.body.list;
        answer.body[value.vendor] = value.body;
        answer.totalnum += value.body.totalnum;
        answer.vendornum++;
      });
      answer.status = 200;
      resolve(answer);
    })
    .catch(function (err) {
      reject("error at search request" + err);
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

const getToplistDetail = (req, res) => {
  switch (req.query.vendor) {
    case 'netease':
      return neteaseAPI.getToplistDetail(req, res);
    case 'qq':
      return qqAPI.getToplistDetail(req, res);
    case 'xiami':
      return xiamiAPI.getToplistDetail(req, res);
  }
};

const getToplists = (req, res) => {
  switch (req.query.vendor) {
    case 'netease':
      return neteaseAPI.getToplists(req, res);
    case 'qq':
      return qqAPI.getToplists(req, res);
    case 'xiami':
      return xiamiAPI.getToplists(req, res);
  }
};

const getUserPlaylists = (req, res) => {
  switch (req.query.vendor) {
    case 'netease':
      return neteaseAPI.getUserPlaylists(req, res);
    case 'qq':
      return qqAPI.getUserPlaylists(req, res);
    case 'xiami':
      return xiamiAPI.getUserPlaylists(req, res);
  }
};

const getHotCategories = (req, res) => {
  switch (req.query.vendor) {
    case 'netease':
      return neteaseAPI.getHotCategories(req, res);
    case 'qq':
      return qqAPI.getHotCategories(req, res);
    case 'xiami':
      return xiamiAPI.getHotCategories(req, res);
  }
};

const getTopPlaylists = (req, res) => {
  switch (req.query.vendor) {
    case 'netease':
      return neteaseAPI.getTopPlaylists(req, res);
    case 'qq':
      return qqAPI.getTopPlaylists(req, res);
    case 'xiami':
      return xiamiAPI.getTopPlaylists(req, res);
  }
};

const getMusicComment = (req, res) => {
  switch (req.query.vendor) {
    case 'netease':
      return neteaseAPI.getMusicComment(req, res);
    case 'qq':
      return qqAPI.getMusicComment(req, res);
    case 'xiami':
      return xiamiAPI.getMusicComment(req, res);
  }
};

const getMVUrl = (req, res) => {
  switch (req.query.vendor) {
    case 'netease':
      return neteaseAPI.getMVUrl(req, res);
    case 'qq':
      return qqAPI.getMVUrl(req, res);
    case 'xiami':
      return xiamiAPI.getMVUrl(req, res);
  }
};

const musicAPI = {
  getSongUrl,
  getLyric,
  search,
  getAlbumCover,
  getAlbumDetail,
  getPlaylistDetail,
  getToplistDetail,
  getToplists,
  getUserPlaylists,
  getHotCategories,
  getTopPlaylists,
  getMusicComment,
  checkMusic,
  getMVUrl
};


module.exports = musicAPI;