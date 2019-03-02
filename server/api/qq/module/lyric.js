module.exports = (query, request) => {
  return request(
    'GET', `http://api.darlin.me/music/lyric/${query.id}`, {}, {},
    {}
  )
};

//https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg?
//`https://api.darlin.me/music/lyric/${query.id}`
// let params = {
//   pcachetime: 1544318154057,
//   songmid: query.mid,
//   g_tk: 650164632,
//   loginUin: 0,
//   hostUin: 0,
//   format: "json",
//   inCharset: "utf8",
//   outCharset: "utf-8",
//   notice: 0,
//   platform: "yqq",
//   needNewCode: 0
// };