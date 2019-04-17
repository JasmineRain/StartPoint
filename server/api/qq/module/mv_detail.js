module.exports = (query, request) => {
  const params = {
    "-": "getMvForSong6891033352425402",
  g_tk: 1006873148,
  loginUin: 0,
  hostUin: 0,
  format: "json",
  inCharset: "utf8",
  outCharset: "utf-8",
  notice: 0,
  platform: "yqq.json",
  needNewCode: 0,
  data: `{"comm":{"ct":24,"cv":0},"mv":{"module":"MvService.MvInfoProServer","method":"GetMvBySongid","param":{"mids":["${query.id}"]}}}`
  };
  return request(
    'GET', `https://u.y.qq.com/cgi-bin/musicu.fcg`, params, {},
    {cookie: query.cookie, proxy: query.proxy}
  )
};