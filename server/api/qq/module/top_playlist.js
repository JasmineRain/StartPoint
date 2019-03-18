const dictionary = {
  "英语": 3090
};

module.exports = (query, request) => {
  const params = {
    "-": "recom4820870765816596",
    g_tk: 912124890,
    loginUin: 0,
    hostUin: 0,
    format: "json",
    inCharset: "utf8",
    outCharset: "utf-8",
    notice: 0,
    platform: "yqq.json",
    needNewCode: 0,
    data: `{"comm":{"ct":24},"recomPlaylist":{"method":"get_hot_recommend","param":{"async":1,"cmd":2},"module":"playlist.HotRecommendServer"},"playlist":{"method":"get_playlist_by_category","param":{"id":${query.id || 3090},"curPage":${query.p||1},"size":${query.n||30},"order":5,"titleid":${query.id || 3090}},"module":"playlist.PlayListPlazaServer"}}`
  };
  return request(
    'GET', `https://u.y.qq.com/cgi-bin/musicu.fcg`, params, {},
    {proxy: query.proxy}
  )
};