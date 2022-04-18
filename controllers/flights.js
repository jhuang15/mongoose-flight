const Flight = require('../models/flight');

module.exports = {
  index,
  new: newFlight,
  create
};

function index(req, res) {
  Flight.find({}, function(err, flights) {
    res.render('flights/index', { flights});
  })
}

function create(req, res) {

}

function newFlight(rew, res) {
  res.render('flights/new');
}