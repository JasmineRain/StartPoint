module.exports = (query, request)=> {
  const question = require('./song_vkey');
  return new Promise((resolve, reject)=>{
    question(query, request).then(answer=>{
      console.log("answer is :" + answer);
      reject("err")
    })
  })
};


// ---------using axios------------
// module.exports = (req, res) => {
//   return new Promise((resolve, reject)=>{
//     let query = req.query;
//     let url = `https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg?g_tk=1278911659&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&cid=205361747&uin=0&guid=133371174&songmid=${query.mid}&filename=C400${query.mid}.m4a`;
//     axios.get(url).then(response=>{
//       console.log(response.data);
//       resolve(response.data.data.items[0].vkey);
//     })
//   })
// };