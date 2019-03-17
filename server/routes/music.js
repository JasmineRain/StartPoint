const express = require('express');
const router = express.Router();
const musicAPI = require('../api/index');


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
  musicAPI.getTopListDetail(req, res).then(answer => {
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
  musicAPI.getTopLists(req, res).then(answer => {
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

router.get('/userplaylists', function (req, res, next) {
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

module.exports = router;