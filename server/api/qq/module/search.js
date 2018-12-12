const dictionary = {
  song: 0,
  lyric: 7,
  album: 8,
  singer: 9,
  MV: 12
};

module.exports = (query, request) => {
  const params = {
    p: query.p || 1,        //当前页
    n: query.n || 20,       //每页数量
    t: dictionary[query.t] || 0,        //0-单曲  7-歌词  8-专辑  9-歌手  12-MV
    w: query.keywords,      //关键词
    g_tk: 5381,
    format: "json",
    loginUin: 0,
    hostUin: 0,
    inCharset: "utf8",
    outCharset: "utf-8",
    notice: 0,
    platform: "yqq",
    needNewCode: 0,
    remoteplace: "txt.yqq.song",
    aggr: 1,
    cr: 1,
    catZhida: 1,
    flag_qc: 0
  };
  return request(
    'GET', `https://c.y.qq.com/soso/fcgi-bin/client_search_cp`, params, {},
    {cookie: query.cookie, proxy: query.proxy}
  )
};