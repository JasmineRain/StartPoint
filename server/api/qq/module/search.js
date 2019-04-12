const dictionary = {
  song: 0,
  lyric: 7,
  album: 8,
  singer: 9,
  mv: 12
};

module.exports = (query, request) => {
  const params1 = {
    p: query.p || 1,                 //当前页
    n: query.n || 30,                //每页数量
    t: dictionary[query.t] || 0,     //0-单曲  7-歌词  8-专辑  9-歌手  12-MV
    w: query.keywords,               //关键词
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

  const params2 = {
    ct: 24,
    qqmusic_ver: 1298,
    p: query.p || 1,
    n: query.n || 30,
    searchid: 244824388723350711,
    remoteplace: "txt.yqq.user",
    w: query.keywords,
    g_tk: 912124890,
    loginUin: 0,
    hostUin: 0,
    format: "json",
    inCharset: "utf8",
    outCharset: "utf-8",
    notice: 0,
    platform: "yqq.json",
    needNewCode: 0
  };

  const params3 = {
    remoteplace: "txt.yqq.playlist",
    searchid: 112190820775144527,
    flag_qc: 0,
    page_no: (query.p - 1) || 0,
    num_per_page: query.n || 30,
    query: query.keywords,
    g_tk: 1006873148,
    loginUin: 0,
    hostUin: 0,
    format: "json",
    inCharset: "utf8",
    outCharset: "utf-8",
    notice: 0,
    platform: "yqq.json",
    needNewCode: 0,
  };

  if(query.t === 'user')
    return request(
      'GET', `https://c.y.qq.com/soso/fcgi-bin/client_search_user`, params2, {},
      {cookie: query.cookie, proxy: query.proxy}
    );
  else if(query.t === 'playlist')
    return request(
      'GET', `https://c.y.qq.com/soso/fcgi-bin/client_music_search_songlist`, params3, {},
      {cookie: query.cookie, proxy: query.proxy}
    );
  else
    return request(
      'GET', `https://c.y.qq.com/soso/fcgi-bin/client_search_cp`, params1, {},
      {cookie: query.cookie, proxy: query.proxy}
    );


};