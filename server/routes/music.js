const express = require('express');
const router = express.Router();
const musicAPI = require('../api/index');

/* GET home page. */
router.get('/getSong', function(req, res, next) {
  musicAPI.getSong(req, res).then(answer=>{
    res.json(answer);
  })
});











module.exports = router;