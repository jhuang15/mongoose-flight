const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

// All routes starts with: /flights 
//(because of the mounting in server.js)

// GET /flights
router.get('/', flightsCtrl.index);
// GET /flights/new (new functionality)
router.get('/new', flightsCtrl.new);
// GET /flights/:id (show functionality)
router.get('/:id', flightsCtrl.show);
// POST /flights (create functionality)
router.post('/', flightsCtrl.create);

module.exports = router;
