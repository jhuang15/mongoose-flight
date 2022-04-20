const Flight = require('../models/flight');

module.exports = {
  index,
  new: newFlight,
  create,
  show
};

function index(req, res) {
  Flight.find({}, function(err, flights) {
    res.render('flights/index', { flights});
  });
}

function show(req,res) {
  Flight.findById(req.params.id, function(err, flight) {
    res.render('flights/show', {flight})
  });
}

function newFlight(rew, res) {
  res.render('flights/new');
}

function create(req, res) {
  console.log(req.body);
  const flight = new Flight(req.body);

  flight.save(function(err) {
    if (err) return res.render('flights/new');
    console.log(flight);
    res.redirect('/flights');
  });
}

