const Flight = require('../models/flight');

module.exports = {
  index,
 // new: newFlight,
 // create
};

function index(req, res) {
  Flight.find({}, function(err, flights) {
    res.render('movies/index', { flights});
  })
}