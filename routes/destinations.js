var express = require('express');
var router = express.Router();
var destinationsCtrl = require('../controllers/destinations');


//POST / create
router.post('/:id/destinations', destinationsCtrl.create);



module.exports = router;