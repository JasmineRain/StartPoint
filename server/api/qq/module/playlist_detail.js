module.exports = (query, request) => {
  const params = {
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    disstid: query.id,
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
  return request(
    'GET', `https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg`, params, {},
    {proxy: query.proxy}
  )
};