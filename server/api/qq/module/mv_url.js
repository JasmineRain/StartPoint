module.exports = (query, request) => {
  const params = {
    g_tk: 5381,
    loginUin: 0,
    hostUin: 0,
    format: 'json',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'yqq.json',
    needNewCode: 0,
    data: `{"getMVUrl":{"module":"gosrf.Stream.MvUrlProxy","method":"GetMvUrls","param":{"vids":["${query.id}"],"request_typet":10001}}}`
  };
  return request(
    'GET', `https://u.y.qq.com/cgi-bin/musicu.fcg`, params, {},
    {cookie: query.cookie, proxy: query.proxy, refer: 'https://u.y.qq.com'}
  )
};