module.exports = (query, request) => {
  const params = {
    page: "index",
    format: "html",
    tpl: "macv4",
    v8debug: "1",
    jsonCallback: "jsonCallback"
  };
  return request(
    'GET', `https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_opt.fcg`, params, {},
    {cookie: query.cookie, proxy: query.proxy}
  )
};