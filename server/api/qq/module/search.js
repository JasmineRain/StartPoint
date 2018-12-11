module.exports = (query, request) => {
  const data = {
    s: query.keywords,
    type: query.type || 0, // 0: 单曲, 7: 歌词, 8: 专辑, 9: 歌手, 12: MV
    limit: query.limit || 30,
    offset: query.offset || 0
  };
  return request(
    'GET', `https://music.163.com/weapi/search/get`, data,
    {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
  )
};