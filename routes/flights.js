var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights')

// All routes start with '/flights'

// GET/ flights/ new
router.get('/new', flightsCtrl.new);
// GET/ flights / index
router.get('/', flightsCtrl.index);
//POST / flights / create
router.post('/', flightsCtrl.create);

module.exports = router;
