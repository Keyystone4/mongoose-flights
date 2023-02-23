const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

// GET / tickets/new
router.get('/tickets/new', ticketsCtrl.new);
// Post / tickets
router.post('/tickets', ticketsCtrl.create);
// Post // flights/:id/tickets
router.post('/flights/:id/tickets', ticketsCtrl.addToDetails);

module.exports = router;