const express = require('express');
const router = express.Router();
const musicAPI = require('../api/index');


router.get('/song_url', function(req, res, next) {
  musicAPI.getSong(req, res).then(answer=>{
    res.json(answer);
  })
});

router.get('/lyric', function(req, res, next) {
  musicAPI.getLyric(req, res).then(answer=>{
    res.json(answer);
  })
});









module.exports = router;