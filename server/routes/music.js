const express = require('express');
const router = express.Router();
const musicAPI = require('../api/index');

router.get('/check_music', function (req, res, next) {
  musicAPI.checkMusic(req, res).then(answer => {
    res.json(answer);
  })
  .catch(function (err) {
    res.json({
      status: 500,
      message: "server error",
      error: err
    })
  })
});

router.get('/song_url', function (req, res, next) {
  musicAPI.getSongUrl(req, res).then(answer => {
    res.json(answer);
  })
  .catch(function (err) {
    res.json({
      status: 500,
      message: "server error",
      error: err
    })
  })
});

router.get('/lyric', function (req, res, next) {
  musicAPI.getLyric(req, res).then(answer => {
    res.json(answer);
  })
  .catch(function (err) {
    res.json({
      status: 500,
      message: "server error",
      error: err
    })
  })
});

router.get('/search', function (req, res, next) {
  musicAPI.search(req, res).then(answer => {
    res.json(answer);
  })
  .catch(function (err) {
    res.json({
      status: 500,
      message: "server error",
      error: err
    })
  })
});

router.get('/album_cover', function (req, res, next) {
  musicAPI.getAlbumCover(req, res).then(answer => {
    res.json(answer);
  })
  .catch(function (err) {
    res.json({
      status: 500,
      message: "server error",
      error: err
    })
  })
});

router.get('/album', function (req, res, next) {
  musicAPI.getAlbumDetail(req, res).then(answer => {
    res.json(answer);
  })
  .catch(function (err) {
    res.json({
      status: 500,
      message: "server error",
      error: err
    })
  })
});

router.get('/playlist', function (req, res, next) {
  musicAPI.getPlaylistDetail(req, res).then(answer => {
    res.json(answer);
  })
  .catch(function (err) {
    res.json({
      status: 500,
      message: "server error",
      error: err
    })
  })
});

router.get('/toplist', function (req, res, next) {
  musicAPI.getToplistDetail(req, res).then(answer => {
    res.json(answer);
  })
  .catch(function (err) {
    res.json({
      status: 500,
      message: "server error",
      error: err
    })
  })
});

router.get('/toplists', function (req, res, next) {
  musicAPI.getToplists(req, res).then(answer => {
    res.json(answer);
  })
  .catch(function (err) {
    res.json({
      status: 500,
      message: "server error",
      error: err
    })
  })
});

router.get('/user_playlists', function (req, res, next) {
  musicAPI.getUserPlaylists(req, res).then(answer => {
    res.json(answer);
  })
  .catch(function (err) {
    res.json({
      status: 500,
      message: "server error",
      error: err
    })
  })
});

router.get('/hot_categories', function (req, res, next) {
  musicAPI.getHotCategories(req, res).then(answer => {
    res.json(answer);
  })
  .catch(function (err) {
    res.json({
      status: 500,
      message: "server error",
      error: err
    })
  })
});

router.get('/top_playlists', function (req, res, next) {
  musicAPI.getTopPlaylists(req, res).then(answer => {
    res.json(answer);
  })
  .catch(function (err) {
    res.json({
      status: 500,
      message: "server error",
      error: err
    })
  })
});

router.get('/music_comment', function (req, res, next) {
  musicAPI.getMusicComment(req, res).then(answer => {
    res.json(answer);
  })
  .catch(function (err) {
    res.json({
      status: 500,
      message: "server error",
      error: err
    })
  })
});

router.get('/mv_url', function (req, res, next) {
  musicAPI.getMVUrl(req, res).then(answer => {
    res.json(answer);
  })
  .catch(function (err) {
    res.json({
      status: 500,
      message: "server error",
      error: err
    })
  })
});

router.get('/mvid', function (req, res, next) {
  musicAPI.getMVId(req, res).then(answer => {
    res.json(answer);
  })
  .catch(function (err) {
    res.json({
      status: 500,
      message: "server error",
      error: err
    })
  })
});

module.exports = router;