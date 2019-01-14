var express = require('express');
var router = express.Router();
var routes = require('./routes');

//login
router.get('/',routes.login)

//home
// router.get('/', routes.home)
router.get('/home', routes.home)

//movie_number
router.get('/harry_potter_chapter/:movie_number?', routes.movie_number)

module.exports = router;
