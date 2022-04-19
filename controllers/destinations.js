const Flight = require('../models/flight');

module.exports = {
  create
}

function create (req,res) {
  Flight.findById(req.params.id, function(err, flight) {
    flight.destinations.push(req.body);
    //Save the updated flight 
    flight.sav(function(err) {
      //redirect
      res.redirect(`/flights/${req.params.id}`);
    });
  });
}