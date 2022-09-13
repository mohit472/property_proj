'use strict';

var express = require('express');
var controller = require('./property.controller');
var router = express.Router();

router.post('/', controller.create);
router.get('/', controller.findAll);

module.exports = router;
