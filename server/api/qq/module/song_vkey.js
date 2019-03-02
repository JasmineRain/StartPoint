module.exports = (query, request) => {
  const params = {
    songmid: query.id,
    g_tk: 1278911659,
    hostUin: 0,
    format: "json",
    inCharset: "utf8",
    outCharset: "utf-8",
    notice: 0,
    platform: "yqq",
    needNewCode: 0,
    cid: 205361747,
    uin: 0,
    guid: 133371174,
    filename:`C400${query.id}.m4a`
  };
  return request(
    'GET', `https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg`, params, {},
    {cookie: query.cookie, proxy: query.proxy}
  )
};

