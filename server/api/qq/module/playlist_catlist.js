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
    data: {"comm":{"ct":24},"category":{"method":"get_hot_category","param":{"qq":""},"module":"music.web_category_svr"}}
  };
  return request(
    'GET', `https://u.y.qq.com/cgi-bin/musicu.fcg`, params, {},
    {proxy: query.proxy}
  )
};