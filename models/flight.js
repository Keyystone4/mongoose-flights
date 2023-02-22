const mongoose = require('mongoose');

// Shortcut to the mongoose.Schema class 
const Schema = mongoose.Schema;

// Flight Model 
const flightSchema = new Schema({
    airline: String,
    airport: String,
    flightNo: Number,
    departures: Date
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);