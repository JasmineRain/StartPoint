module.exports = (query, request) => {
  return new Promise((resolve, reject)=>{
    const answer = { status: 500, body: {}, cookie: [] };
    if(query.id){
      answer.status = 200;
      answer.body = {
        url:`http://imgcache.qq.com/music/photo/album_300/${query.id % 100}/300_albumpic_${query.id}_0.jpg`
      };
      resolve(answer);
    }
    else{
      answer.body = {
        code: 502,
        msg: "invalid id of album"
      };
      reject(answer)
    }
  })
};