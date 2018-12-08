module.exports = (query, request) => {
  return request(
    'GET', `https://api.darlin.me/music/lyric/${query.id}`, {},
    {cookie: query.cookie, proxy: query.proxy}
  )
};