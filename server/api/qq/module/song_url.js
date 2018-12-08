module.exports = (query, request)=> {
  const question = require('./song_vkey');
  return new Promise((resolve, reject)=>{
    question(query, request).then(answer=>{
      if(answer.status === 200){
        let item = answer.body.data.items[0];
        answer.body.data.items[0].url = `http://dl.stream.qqmusic.qq.com/C400${item.songmid}.m4a?vkey=${item.vkey}&guid=133371174&fromtag=66`;
        resolve(answer);
      }
      else
        reject(answer);
    })
  })
};