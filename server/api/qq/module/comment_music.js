module.exports = (query, request) => {
  const params = {
    g_tk: 1006873148,
    loginUin: 0,
    hostUin: 0,
    format: "json",
    inCharset: "utf8",
    outCharset: "GB2312",
    notice: 0,
    platform: "yqq.json",
    needNewCode: 0,
    cid: 205360772,
    reqtype: 2,
    biztype: 1,
    topid: query.id,
    cmd: 8,
    needmusiccrit: 0,
    pagenum: (query.p - 1) || 0,
    pagesize: query.n || 25,
    lasthotcommentid:"",
    domain: "qq.com",
    ct: 24,
    cv: 10101010,
  };
  return request(
    'GET', `https://c.y.qq.com/base/fcgi-bin/fcg_global_comment_h5.fcg`, params, {},
    {cookie: query.cookie, proxy: query.proxy}
  )
};