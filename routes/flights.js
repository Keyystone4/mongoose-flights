var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights')

// All routes start with '/flights'

// GET/ flights/ new
router.get('/new', flightsCtrl.new);
// GET/ flights / index
router.get('/', flightsCtrl.index);
// GET/flights/:id/ show
router.get('/:id', flightsCtrl.show);
//POST / flights / create
router.post('/', flightsCtrl.create);

module.exports = router;
