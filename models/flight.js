const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;
	
const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United']
  },
  airport: {
    type: String,
    default: 'DEN',
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
  },
  flightNo: {
    type: Number,
    required: true,
    enum: [] //array of nums 10-9000
  },
  departs: {
    type: Date,
    default: Date++
  } 
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);