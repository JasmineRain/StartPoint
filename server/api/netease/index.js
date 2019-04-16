const request = require('./util/request');
const musicUtil = require('../../public/javascripts/music');

const getSongUrl = (req, res) => {
  return new Promise((resolve, reject) => {
    let question = require('./module/song_url');
    let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});
    question(query, request).then(answer => {

      //保存源返回值，重新包装数据
      let rowData = answer;

      if (answer.status === 200) {
        let bd = answer.body.data[0];
        answer.body = {
          url: bd.url
        };
        resolve(answer);
      } else {
        reject("request failed")
      }
    })
    .catch(function (err) {
      reject("error netease api" + err);
    })
  })
};

const getLyric = (req, res) => {
  return new Promise((resolve, reject) => {
    let question = require('./module/lyric');
    let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});
    question(query, request).then(answer => {

      //保存源返回值，重新包装数据
      let rowData = answer;

      if (answer.status === 200) {
        let lyric = musicUtil.parseLyric(answer.body.lrc.lyric);
        answer.body = {
          lyric: lyric
        };
        resolve(answer);
      } else {
        reject("request failed")
      }
    })
    .catch(function (err) {
      reject("error netease api" + err);
    })
  })
};

const search = (req, res) => {
  return new Promise((resolve, reject) => {
    let question = require('./module/search');
    let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});
    question(query, request).then(function (answer) {

      //保存源返回值，重新包装数据
      let rowData = answer;

      if (answer.status === 200) {
        let result = answer.body.result;
        let list=[];
        let totalnum;
        switch (query.t) {
          case 'song':
            result.songs.forEach(function (song) {
              let singers = [];
              song.artists.forEach(function (singer) {
                singers.push({
                  name: singer.name,
                  id: singer.id
                })
              });
              list.push({
                song: {
                  name: song.name,
                  id: song.id,
                  duration: Math.round((song.duration) / 1000)
                },
                album: {
                  name: song.album.name,
                  id: song.album.id
                },
                singer: singers
              })
            });
            totalnum = result.songCount;
            break;
          case 'lyric':
            result.songs.forEach(function (song) {
              let singers = [];
              song.artists.forEach(function (singer) {
                singers.push({
                  name: singer.name,
                  id: singer.id
                })
              });
              list.push({
                song: {
                  name: song.name,
                  id: song.id,
                  duration: Math.round((song.duration) / 1000)
                },
                album: {
                  name: song.album.name,
                  id: song.album.id
                },
                singer: singers,
                lyric: song.lyrics.txt
              })
            });
            totalnum = result.songCount;
            break;
          case 'mv':
            result.mvs.forEach(function (mv) {
              let singers = [];
              mv.artists.forEach(function (singer) {
                singers.push({
                  name: singer.name,
                  id: singer.id
                })
              });
              list.push({
                mv: {
                  name: mv.name,
                  id: mv.id,
                  duration: Math.round((mv.duration) / 1000),
                  cover: mv.cover
                },
                singer: singers,
                play: mv.playCount
              })
            });
            totalnum = result.mvCount;
            break;
          case 'album':
            result.albums.forEach(function (album) {
              let singers = [];
              album.artists.forEach(function (singer) {
                singers.push({
                  name: singer.name,
                  id: singer.id
                })
              });
              list.push({
                album: {
                  name: album.name,
                  id: album.id,
                  cover: album.picUrl
                },
                singer: singers
              })
            });
            totalnum = result.albumCount;
            break;
          case 'singer':
            result.artists.forEach(function (singer) {
              list.push({
                name: singer.name,
                id: singer.id,
                album: singer.albumSize,
                mv: singer.mvSize,
                avatar: singer.picUrl
              })
            });
            totalnum = result.artistCount;
            break;
          case 'fm':
            result.djRadios.forEach(function (radio) {
              list.push({
                name: radio.name,
                id: radio.id,
                desc: radio.desc,
                dj: {
                  name: radio.dj.nickname,
                  id: radio.dj.userId,
                  desc: radio.dj.description
                }
              })
            });
            totalnum = result.djRadiosCount;
            break;
          case 'user':
            result.userprofiles.forEach(function (user) {
              list.push({
                name: user.nickname,
                id: user.userId,
                signature: user.signature,
                avatar: user.avatarUrl
              })
            });
            totalnum = result.userprofileCount;
            break;
          case 'playlist':
            result.playlists.forEach(function (playlist) {
              list.push({
                playlist: {
                  name: playlist.name,
                  id: playlist.id,
                  cover: playlist.coverImgUrl,
                  play: playlist.playCount
                },
                creator: {
                  name: playlist.creator.nickname,
                  id: playlist.creator.userId
                }
              })
            });
            totalnum = result.playlistCount;
            break;
          case 'video':
            result.videos.forEach(function (video) {
              let creators = [];
              video.creator.forEach(function (creator) {
                creators.push({
                  name: creator.userName,
                  id: creator.userId
                })
              });
              list.push({
                video: {
                  name: video.title,
                  id: video.vid,
                  duration: video.durationms
                },
                creator: creators
              })
            });
            totalnum = result.videoCount;
            break;
          default:
            list = result;
            break;
        }
        answer.body = {
          keyword: req.query.keywords,
          list: list,
          totalnum: totalnum
        };
        resolve(answer)
      } else {
        reject("request failed");
      }
    })
    .catch(function (err) {
      reject("error netease api" + err);
    })
  })
};

const getAlbumCover = (req, res) => {
  return new Promise((resolve, reject) => {
    let question = require('./module/album');
    let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});
    question(query, request).then(answer => {

      //保存源返回值，重新包装数据
      let rowData = answer;
      if(answer.status === 200) {
        let url = answer.body.album.picUrl;
        answer.body = {
          url: url
        };
        resolve(answer);
      } else {
        reject("request failed");
      }
    })
    .catch(function (err) {
      reject("error netease api" + err);
    })
  })
};

const getAlbumDetail = (req, res) => {
  return new Promise((resolve, reject) => {
    let question = require('./module/album');
    let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});
    question(query, request).then(answer => {

      //保存源返回值，重新包装数据
      let rowData = answer;

      if(answer.status === 200) {
        let album = {
          paid: answer.body.album.paid,
          name: answer.body.album.name,
          desc: answer.body.album.description,
          id: answer.body.album.id,
        };
        let singer = {
          name: answer.body.album.artist.name,
          id: answer.body.album.artist.id
        };
        let songs = [];
        answer.body.songs.forEach(function (song) {
          songs.push({
            name: song.name,
            id: song.id,
            duration: Math.round((song.dt) / 1000)
          })
        });
        let total = songs.length;
        answer.body = {
          album,
          singer,
          songs,
          total
        };
        resolve(answer);
      } else {
        reject("request failed");
      }
    })
    .catch(function (err) {
      reject("error netease api" + err);
    })
  })
};

const getPlaylistDetail = (req, res) => {
  return new Promise((resolve, reject) => {
    let question = require('./module/playlist_detail');
    let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});
    question(query, request).then(answer => {

      //保存源返回值，重新包装数据
      let rowData = answer;

      if(answer.status === 200) {
        let total = answer.body.playlist.trackCount;
        let list = {
          name: answer.body.playlist.name,
          cover: answer.body.playlist.coverImgUrl,
          id: answer.body.playlist.id,
          desc: answer.body.playlist.description
        };
        let creator = {
          name: answer.body.playlist.creator.nickname,
          signature: answer.body.playlist.creator.signature,
          desc: answer.body.playlist.creator.description,
          avatar: answer.body.playlist.creator.avatarUrl,
          id: answer.body.playlist.creator.userId
        };
        let songs = [];
        answer.body.playlist.tracks.forEach(function (song) {
          let ar = [];
          song.ar.forEach(function (item) {
            ar.push({
              id: item.id,
              name: item.name
            })
          });
          songs.push({
            song: {
              name: song.name,
              id: song.id,
              duration: Math.round((song.dt) / 1000)
            },
            album: {id: song.al.id, name: song.al.name, picUrl: song.al.picUrl},
            singer: ar
          })
        });
        answer.body = {
          creator,
          list,
          songs,
          total
          //privileges
        };
        resolve(answer)
      } else {
        reject("request failed");
      }
    })
    .catch(function (err) {
      reject("error netease api" + err);
    })
  })
};

const getToplistDetail = (req, res) => {
  return new Promise((resolve, reject) => {
    let question = require('./module/top_list');
    let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});
    question(query, request).then(answer => {

      //保存源返回值，重新包装数据
      let rowData = answer;
      if(answer.status === 200) {
        let creator = {
          name: answer.body.playlist.creator.nickname,
          signature: answer.body.playlist.creator.signature,
          desc: answer.body.playlist.creator.description,
          avatar: answer.body.playlist.creator.avatarUrl,
          id: answer.body.playlist.creator.userId
        };
        let list = {
          name: answer.body.playlist.name,
          id: answer.body.playlist.id,
          cover: answer.body.playlist.coverImgUrl,
          desc: answer.body.playlist.description
        };
        let total = answer.body.playlist.trackCount;
        let songs = [];
        answer.body.playlist.tracks.forEach(function (song) {
          let ar = [];
          song.ar.forEach(function (item) {
            ar.push({
              id: item.id,
              name: item.name
            })
          });
          songs.push({
            song: {
              name: song.name,
              id: song.id,
              duration: Math.round((song.dt) / 1000)
            },
            album: {id: song.al.id, name: song.al.name, picUrl: song.al.picUrl},
            singer: ar
          })
        });
        answer.body = {
          creator,
          list,
          songs,
          total
        };
        resolve(answer)
      } else {
        reject("request failed");
      }
    })
    .catch(function (err) {
      reject("error netease api" + err);
    })
  })
};

const getToplists = (req, res) => {
  return new Promise((resolve, reject) => {
    let question = require('./module/toplist');
    let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});
    question(query, request).then(answer => {

      //保存源返回值，重新包装数据
      let rowData = answer;
      if(answer.status === 200) {
        let list = [];
        answer.body.list.forEach(function (item) {
          list.push({
            name: item.name,
            id: item.id,
            desc: item.description,
            play: item.playCount,
            cover: item.coverImgUrl
          })
        });
        answer.body = {
          list
        };
        resolve(answer);
      } else {
        reject("request failed");
      }
    })
    .catch(function (err) {
      reject("error netease api" + err);
    })
  })
};

const getUserPlaylists = (req, res) => {
  return new Promise((resolve, reject) => {
    let question = require('./module/user_playlist');
    let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});
    question(query, request).then(answer => {

      //保存源返回值，重新包装数据
      let rowData = answer;
      if(answer.status === 200) {

        let creator = {
          name: answer.body.playlist[0].creator.nickname,
          signature: answer.body.playlist[0].creator.signature,
          id: answer.body.playlist[0].creator.userId,
          avatar: answer.body.playlist[0].creator.avatarUrl
        };

        let lists = [];
        answer.body.playlist.forEach(function (list) {
          lists.push({
            name: list.name,
            id: list.id,
            description: list.description || "",
            cover: list.coverImgUrl,
            total: list.trackCount
          })
        });
        answer.body = {
          creator,
          lists: categories
        };
        resolve(answer);
      } else {
        reject("request failed");
      }
    })
    .catch(function (err) {
      reject("error netease api" + err);
    })
  })
};

const getHotCategories = (req, res) => {
  return new Promise((resolve, reject) => {
    let question = require('./module/playlist_catlist');
    let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});
    question(query, request).then(answer => {

      //保存源返回值，重新包装数据
      let rowData = answer;
      if(answer.status === 200) {

        let category = [];
        answer.body.sub.forEach(function (item) {
          if(item.hot === true){
            category.push({
              name: item.name,
              id: item.name
            });
          }
        });
        answer.body = {
          category
        };
        resolve(answer);
      } else {
        reject("request failed");
      }
    })
    .catch(function (err) {
      reject("error netease api" + err);
    })
  })
};

const getTopPlaylists = (req, res) => {
  return new Promise((resolve, reject) => {
    let question = require('./module/top_playlist');
    let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});
    question(query, request).then(answer => {

      //保存源返回值，重新包装数据
      let rowData = answer;
      if(answer.status === 200) {
        let lists = [];
        answer.body.playlists.forEach(function (list) {
          lists.push({
            creator: {
              name: list.creator.nickname,
              id: list.creator.userId
            },
            list: {
              name: list.name,
              cover: list.coverImgUrl,
              id: list.id,
              play: list.playCount,
              desc: list.description
            }
          })
        });

        answer.body = {
          lists: lists
        };
        resolve(answer);
      } else {
        reject("request failed");
      }
    })
    .catch(function (err) {
      reject("error netease api" + err);
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
        answer.body.comments.forEach(function (item) {
          comments.new.push({
            author: item.user.nickname,
            avatar: item.user.avatarUrl,
            content: item.content,
            like: item.likedCount,
            time: item.time
          })
        });
        answer.body.hotComments.forEach(function (item) {
          comments.hot.push({
            author: item.user.nickname,
            avatar: item.user.avatarUrl,
            content: item.content,
            like: item.likedCount,
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
      reject("error netease api" + err);
    })
  })
};

module.exports = {
  getSongUrl, getLyric, search, getAlbumCover, getAlbumDetail, getPlaylistDetail,
  getToplistDetail, getToplists, getUserPlaylists, getHotCategories, getTopPlaylists,
  getMusicComment
};