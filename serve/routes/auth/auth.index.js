var express = require('express');
var router = express.Router();

const controller = require('./auth.controller');

router.get('/', controller.home);
router.post('/user', controller.user);
router.post('/login', controller.login);
router.post('/verify', controller.verify);

module.exports = router;