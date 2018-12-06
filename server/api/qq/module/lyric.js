// //https://api.darlin.me/music/lyric/"+获取的音乐id+"/?
// const getQQlyric = function(id) {
//   let url = QQLyric + id + "/";
//   return new Promise(resolve => {
//     axios.get(url).then(response => {
//       let info = response.data;
//       let lrc = info.substring(info.indexOf("lyric") + 8, info.length - 3);
//       resolve(lrc);
//     });
//   });
// };

module.exports = (query, request) => {
  return request(
    'GET', `https://api.darlin.me/music/lyric/${query.id}`, {},
    {cookie: query.cookie, proxy: query.proxy}
  )
};