module.exports = (query, request) => {
  const params = {
    ct: 24,
    albummid: query.id,
    g_tk: 912124890,
    format: "json",
    loginUin: 0,
    hostUin: 0,
    inCharset: "utf8",
    outCharset: "utf-8",
    notice: 0,
    platform: "yqq.json",
    needNewCode: 0
  };
  return request(
    'GET', `https://c.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg`, params, {},
    {cookie: query.cookie, proxy: query.proxy}
  )
};