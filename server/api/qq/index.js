const request = require('./util/request');
const Base64 = require('../../public/javascripts/base64');
const musicUtil = require('../../public/javascripts/music');

const getSongUrl = (req, res) => {
  return new Promise((resolve, reject) => {
    let question = require('./module/song_url');
    let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});

    question(query, request).then(answer => {
      if(answer.status === 200) {
        let item = answer.body.data.items[0];
        let url = `http://dl.stream.qqmusic.qq.com/C400${item.songmid}.m4a?vkey=${item.vkey}&guid=133371174&fromtag=66`;
        answer.body = {
          url: url
        };
        resolve(answer);
      } else {
        reject("request origin failed");
      }
    })
    .catch(function (err) {
      reject("error qq api" + err);
    })
  })
};

const getLyric = (req, res) => {
  return new Promise((resolve, reject) => {
    let question = require('./module/lyric');
    let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});
    question(query, request).then(answer => {

      //保存源数据 重新包装数据
      let rowData = answer;

      if (answer.status === 200) {
        let lyric = answer.body.lyric;
        lyric = musicUtil.parseLyric(Base64.decode(lyric));
        answer.body = {
          lyric: lyric
        };
        resolve(answer);
      } else {
        reject("request origin failed");
      }
    })
    .catch(function (err) {
      reject("error qq api" + err);
    })
  });
};

const search = (req, res) => {
  return new Promise((resolve, reject) => {
    let question = require('./module/search');
    let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});
    question(query, request).then(function (answer) {

      //保存源数据 重新包装数据
      let rowData = answer;
      if (answer.status === 200) {
        let data = answer.body.data;
        let list = [];
        let totalnum;
        switch (query.t) {
          case 'song':
            data.song.list.forEach(function (song) {
              let singers = [];
              song.singer.forEach(function (singer) {
                singers.push({
                  name: singer.name,
                  id: singer.id,
                  mid: singer.mid
                })
              });
              list.push({
                song: {
                  name: song.songname,
                  id: song.songid,
                  mid: song.songmid,
                  duration: song.interval
                },
                album: {
                  name: song.albumname,
                  id: song.albumid,
                  mid: song.albummid
                },
                singer: singers
              })
            });
            totalnum = data.song.totalnum;
            break;
          case 'lyric':
            data.lyric.list.forEach(function (song) {
              let singers = [];
              song.singer.forEach(function (singer) {
                singers.push({
                  name: singer.name,
                  id: singer.id,
                  mid: singer.mid
                })
              });
              list.push({
                song: {
                  name: song.songname,
                  id: song.songid,
                  mid: song.songmid,
                  duration: song.interval
                },
                album: {
                  name: song.albumname,
                  id: song.albumid,
                  mid: song.albummid
                },
                singer: singers,
                lyric: song.content
              })
            });
            totalnum = data.lyric.totalnum;
            break;
          case 'mv':
            data.mv.list.forEach(function (mv) {
              let singers = [];
              mv.singer_list.forEach(function (singer) {
                singers.push({
                  name: singer.name,
                  id: singer.id,
                  mid: singer.mid
                })
              });
              list.push({
                mv: {
                  name: mv.mv_name,
                  id: mv.mv_id,
                  docid: mv.docid,
                  cover: mv.mv_pic_url
                },
                singer: singers,
                play: mv.play_count
              })
            });
            totalnum = data.mv.totalnum;
            break;
          case 'album':
            data.album.list.forEach(function (album) {
              let singers = [];
              album.singer_list.forEach(function (singer) {
                singers.push({
                  name: singer.name,
                  id: singer.id,
                  mid: singer.mid
                })
              });
              list.push({
                album: {
                  name: album.albumName,
                  id: album.albumID,
                  mid: album.albumMID,
                  total: album.song_count,
                  cover:album.albumPic
                },
                singer: singers
              })
            });
            totalnum = data.album.totalnum;
            break;
          case 'singer':
            data.singer.list.forEach(function (singer) {
              list.push({
                name: singer.singerName,
                id: singer.singerID,
                mid: singer.singerMID,
                album: singer.albumNum,
                mv: singer.mvNum,
                song: singer.songNum,
                avatar: singer.singerPic
              })
            });
            totalnum = data.singer.totalnum;
            break;
          case 'user':
            data.user.list.forEach(function (user) {
              list.push({
                name: user.title,
                id: user.docid,
                fans: user.fans_num,
                avatar: user.pic
              })
            });
            totalnum = data.user.totalnum;
            break;
          case 'playlist':
            data.list.forEach(function (playlist) {
              list.push({
                playlist: {
                  name: playlist.dissname,
                  id: playlist.dissid,
                  play: playlist.listennum,
                  cover: playlist.imgurl
                },
                creator: {
                  id: playlist.creator.creator_uin,
                  name: playlist.creator.name
                }
              })
            });
            break;
          default:
            list = data;
            break;
        }
        answer.body = {
          keyword: req.query.keywords,
          list: list,
          totalnum: totalnum
        };
        resolve(answer);
      } else {
        reject("request origin failed");
      }
    })
    .catch(function (err) {
      reject("error at qq api" + err);
    })
  });
};

const getAlbumCover = (req, res) => {
  let question = require('./module/album_cover');
  let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});

  //因Cover保存在缓存服务器中，不需要特殊请求，数据包装放在了./module/album_cover中
  return question(query, request);
};

const getAlbumDetail = (req, res) => {
  return new Promise((resolve, reject) => {
    let question = require('./module/album');
    let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});
    question(query, request).then(answer => {

      //保存源数据 重新包装数据
      let rowData = answer;

      if(answer.status === 200) {

        //保存源返回值，重新包装数据
        let rowData = answer;

        if(answer.status === 200) {
          let album = {
            name: answer.body.data.name,
            id: answer.body.data.id,
            mid: answer.body.data.mid,
            desc: answer.body.data.desc,
            paid: answer.body.data.list[0].pay.payalbum
          };

          let singer = {
            name: answer.body.data.singername,
            id: answer.body.data.singerid,
            mid: answer.body.data.singermid
          };

          let songs = [];

          answer.body.data.list.forEach(function (song) {
            songs.push({
              name: song.songname,
              id: song.songid,
              mid: song.songmid,
              duration: song.interval
            })
          });

          let total = songs.length;

          answer.body = {
            album,
            singer,
            songs,
            total
          };
        }
        resolve(answer);
      } else {
        reject("request origin failed");
      }
    })
    .catch(function (err) {
      reject("error qq api" + err);
    })
  })

};

const getPlaylistDetail = (req, res) => {
  return new Promise((resolve, reject) => {
    let question = require('./module/playlist_detail');
    let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});
    question(query, request).then(answer => {

      //保存源数据 重新包装数据
      let rowData = answer;

      if (answer.status === 200) {
        let list = {
          name: answer.body.cdlist[0].dissname,
          id: answer.body.cdlist[0].disstid,
          cover: answer.body.cdlist[0].logo,
          desc: answer.body.cdlist[0].desc
        };
        let creator = {
          name: answer.body.cdlist[0].nickname,
          avatar: answer.body.cdlist[0].headurl,
          id: answer.body.cdlist[0].uin           //user docid
        };
        let songs = [];

        let total = answer.body.cdlist[0].songnum;

        answer.body.cdlist[0].songlist.forEach(function (song) {
          songs.push({
            song: {
              name: song.songname,
              mid: song.songmid,
              id: song.songid,
              duration: song.interval
            },
            album: {
              name: song.albumname,
              id: song.albumid,
              mid: song.albummid,
              desc: song.albumdesc,
            },
            singer: song.singer
          })
        });

        answer.body = {
          creator,
          list,
          songs,
          total
        };
        resolve(answer);
      } else {
        reject("request origin failed");
      }
    })
    .catch(function (err) {
      reject("error qq api\n" + err);
    })
  })
};

const getToplistDetail = (req, res) => {
  return new Promise((resolve, reject) => {
    let question = require('./module/top_list');
    let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});
    question(query, request).then(answer => {

      //保存源数据 重新包装数据
      let rowData = answer;
      if (answer.status === 200) {
        let creator = {
          name: "QQ音乐",
          desc: "QQ音乐巅峰榜推荐"
        };
        let total = answer.body.total_song_num;
        let songs = [];
        answer.body.songlist.forEach(function (song) {
          songs.push({
            album: {
              desc: song.data.albumdesc,
              id: song.data.albumid,
              mid: song.data.albummid,
              name: song.data.albumname
            },
            singer: song.data.singer,
            song: {
              name: song.data.songname,
              id: song.data.songid,
              mid: song.data.songmid,
              duration: song.data.interval
            }
          })
        });
        answer.body = {
          creator,
          total,
          songs
        };
        resolve(answer);
      } else {
        reject("request origin failed");
      }
    })
    .catch(function (err) {
      reject("error qq api\n" + err);
    })
  })
};

const getToplists = (req, res) => {
  return new Promise((resolve, reject) => {
    let question = require('./module/toplist');
    let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});
    question(query, request).then(answer => {

      //保存源数据 重新包装数据
      let rowData = answer;
      if (answer.status === 200) {

        let s = answer.body.indexOf("([{");
        let l1 = answer.body.lastIndexOf("GroupID");
        let list1 = JSON.parse(answer.body.slice(s+2,l1-3));
        let list2 = JSON.parse(answer.body.slice(l1-2,-3));

        let list = [];

        list1.List.forEach(function (item) {
          list.push({
            name: item.ListName,
            cover: item.pic,
            play: item.listennum,
            id: item.topID,
            update_key: item.update_key, //请求详情URL参数
            desc: item.ListName
          })
        });
        list2.List.forEach(function (item) {
          list.push({
            name: item.ListName,
            cover: item.pic,
            play: item.listennum,
            id: item.topID,
            update_key: item.update_key,
            desc: item.ListName
          })
        });
        answer.body = {
          list
        };
        resolve(answer);
      } else {
        reject("request origin failed");
      }
    })
    .catch(function (err) {
      reject("error qq api\n" + err);
    })
  })
};

const getUserPlaylists = (req, res) => {
  return new Promise((resolve, reject) => {
    let question = require('./module/user_playlist');
    let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});
    question(query, request).then(answer => {

      //保存源数据 重新包装数据
      let rowData = answer;
      if (answer.status === 200) {
        let creator = {
          name: answer.body.data.creator.nick,
          avatar: answer.body.data.creator.headpic,
          id: answer.body.data.creator.uin,
          eid: answer.body.data.creator.encrypt_uin,
          desc: answer.body.data.creator.cfinfo.title
        };

        let lists = [];
        lists.push({
          id: answer.body.data.mymusic[0].id,
          cover: answer.body.data.mymusic[0].laypic,
          name: answer.body.data.mymusic[0].name,
          total: answer.body.data.mymusic[0].num0,
          desc: ""
        });
        answer.body.data.mydiss.list.forEach(function (list) {
          lists.push({
            id: list.dissid,
            cover: list.picurl,
            name: list.title,
            total: list.subtitle.substring(0, list.subtitle.indexOf("首")),
            desc: ""
          })
        });

        answer.body = {
          creator,
          lists: categories
        };
        resolve(answer);
      } else {
        reject("request origin failed");
      }
    })
    .catch(function (err) {
      reject("error qq api\n" + err);
    })
  })
};

const getHotCategories = (req, res) => {
  return new Promise((resolve, reject) => {
    let question = require('./module/playlist_catlist');
    let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});
    question(query, request).then(answer => {

      //保存源数据 重新包装数据
      let rowData = answer;
      if (answer.status === 200) {

        let category = [];
        let items = answer.body.category.data.category[0].items;
        items.forEach(function (item) {
          category.push({
            id: item.item_id,
            name: item.item_name
          })
        });
        answer.body = {
          category
        };
        resolve(answer);
      } else {
        reject("request origin failed");
      }
    })
    .catch(function (err) {
      reject("error qq api\n" + err);
    })
  })
};

const getTopPlaylists = (req, res) =>{
  return new Promise((resolve, reject) => {
    let question = require('./module/top_playlist');
    let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});
    question(query, request).then(answer => {

      //保存源数据 重新包装数据
      let rowData = answer;
      if (answer.status === 200) {
        let lists = [];

        if(!req.query.id){
          answer.body.recomPlaylist.data.v_hot.forEach(function (list) {
            lists.push({
              creator: {
                name: list.username,
                id: list.creator
              },
              list: {
                name: list.title,
                cover: list.cover,
                id: list.content_id,
                play: list.listen_num
              }
            })
          })
        }
        else {
          answer.body.playlist.data.v_playlist.forEach(function (list) {
            lists.push({
              creator: {
                name: list.creator_info.nick,
                id: list.creator_info.uin
              },
              list: {
                name: list.title,
                cover: list.cover_url_big,
                id: list.tid,
                play: list.access_num
              }
            })
          })
        }
        answer.body = {
          lists: lists
        };
        resolve(answer);
      } else {
        reject("request origin failed");
      }
    })
    .catch(function (err) {
      reject("error qq api\n" + err);
    })
  })
};

const getMusicComment = (req, res) => {
  return new Promise((resolve, reject) => {
    let question = require('./module/comment_music');
    let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});
    question(query, request).then(answer => {

      //保存源返回值，重新包装数据
      let rowData = answer;
      if(answer.status === 200) {
        let comments = {new: [], hot: []};
        answer.body.comment.commentlist.forEach(function (item) {
          comments.new.push({
            author: item.nick,
            avatar: item.avatarurl,
            content: item.rootcommentcontent,
            like: item.praisenum,
            time: item.time
          })
        });
        answer.body.hot_comment.commentlist.forEach(function (item) {
          comments.hot.push({
            author: item.nick,
            avatar: item.avatarurl,
            content: item.rootcommentcontent,
            like: item.praisenum,
            time: item.time
          })
        });

        answer.body = {
          comments: comments
        };
        resolve(answer);
      } else {
        reject("request failed");
      }
    })
    .catch(function (err) {
      reject("error qq api" + err);
    })
  })
};

//mv


module.exports = {
  getSongUrl, getLyric, search, getAlbumCover, getAlbumDetail, getPlaylistDetail,
  getToplistDetail, getToplists, getUserPlaylists, getHotCategories, getTopPlaylists,
  getMusicComment
};