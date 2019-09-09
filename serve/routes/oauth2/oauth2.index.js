var express = require('express');
var router = express.Router();
const request = require('request');

const controller = require('./oauth2.controller');

// router.all('/oauth2',function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", req.headers.origin);
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//   res.header("Access-Control-Allow-Credentials",true);
// //带cookies
//   res.header("Content-Type", "application/json;charset=utf-8");
//  next();
// });

// 申请注册授权
router.post('/registe', controller.registe);
router.get('/getClient', controller.getClient);
router.get('/redirect', controller.redirect);
router.get('/show', controller.show);
router.get('/movie', controller.movie);

module.exports = router;