const topList = {
  //QQ音乐巅峰榜
  //type=top
  0: { topid:"4", date: "2019-03-13", type: "top"},  //流行指数  topid=4   date=2019-03-13
  1: { topid:"26", date: "2019_09", type: "top"},    //热歌     topid=26  date=2019_09
  2: { topid:"27", date: "2019-03-13", type: "top"}, //新歌     topid=27  date=2019-03-13
  3: { topid:"58", date: "2019_09", type: "top"},    //说唱     topid=58  date=2019_09
  4: { topid:"28", date: "2019_09", type: "top"},    //网络歌曲  topid=28  date=2019_09
  5: { topid:"5", date: "2019_09", type: "top"},     //内地     topid=5    date=2019_09
  6: { topid:"6", date: "2019_09", type: "top"},     //港台     topid=6    date=2019_09
  7: { topid:"3", date: "2019_09", type: "top"},     //欧美     topid=3    date=2019_09
  8: { topid:"16", date: "2019_09", type: "top"},    //韩国     topid=16   date=2019_09
  9: { topid:"29", date: "2019_09", type: "top"},    //影视金曲  topid=29   date=2019_09
  10: { topid:"17", date: "2019_09", type: "top"},   //日本     topid=17   date=2019_09
  11: { topid:"52", date: "2019_10", type: "top"},   //tx音乐人  topid=52  date=2019_10
  12: { topid:"36", date: "2019_07", type: "top"},   //K歌金曲  topid=36   date=2019_07

  //QQ音乐全球榜
  //type=global
  13: { topid:"17", date: "2019_09", type: "global"}, //美国公告牌榜   topid=108  date=2019_11
  14: { topid:"123", date: "2019_09", type: "global"},//美国iTunes榜  topid=123  date=2019_7
  15: { topid:"106", date: "2019_09", type: "global"},//韩国Mnet榜    topid=106  date=2019_10
  16: { topid:"107", date: "2019_09", type: "global"},//英国UK榜      topid=107  date=2019_9
  17: { topid:"105", date: "2019_09", type: "global"},//日本公信榜     topid=105  date=2019_9
  18: { topid:"113", date: "2019_09", type: "global"},//香港电台帮     topid=113  date=2019_9
  19: { topid:"114", date: "2019_09", type: "global"},//香港商台榜     topid=114  date=2019_9
  20: { topid:"103", date: "2019_09", type: "global"} //台湾Hito中文榜 topid=103  date=2019_8
};

module.exports = (query, request) => {
  const params = {
    tpl: 3,
    page: "detail",
    date: topList[query.idx].date,
    topid: topList[query.idx].topid,
    type: topList[query.idx].type,
    song_begin: 0,
    song_num: 100,
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
    'GET', `https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg`, params, {},
    {cookie: query.cookie, proxy: query.proxy}
  )
};

//mv https://c.y.qq.com/mv/fcgi-bin/fcg_musicshow_mvtoplist.fcg?g_tk=912124890&loginUin=530781348&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0&listtype=all&listid=all_musicshow_mvtoplist_current_new

