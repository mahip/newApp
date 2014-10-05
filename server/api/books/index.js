'use strict';

var express = require('express');
var controller = require('./books.controller');

var router = express.Router();

router.get('/:searchType/:searchValue', controller.searchBooks);

module.exports = router;