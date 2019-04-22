module.exports = (query, request) => {
  const params = {
    g_tk: 912124890,
    loginUin: 0,
    hostUin: 0,
    format: "json",
    inCharset: "utf8",
    outCharset: "utf-8",
    notice: 0,
    platform: "yqq.json",
    needNewCode: 0,
    cid: 205360838,
    ct: 20,
    userid: query.id,
    reqfrom: 1,
    reqtype: 0
  };
  return request(
    'GET', `https://c.y.qq.com/rsc/fcgi-bin/fcg_get_profile_homepage.fcg`, params, {},
    {proxy: query.proxy, refer: 'https://y.qq.com/portal/profile.html'}
  )
};