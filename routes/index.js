var express = require('express');
var router = express.Router();
var routes = require('./routes');

//home
router.get('/', routes.home)

//movie_number
router.get('/harry_potter_chapter/:movie_number?', routes.movie_number)

module.exports = router;
