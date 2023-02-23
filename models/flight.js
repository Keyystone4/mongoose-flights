const mongoose = require('mongoose');

// Shortcut to the mongoose.Schema class 
const Schema = mongoose.Schema;


  const destinationSchema = new Schema({
    airport: { type: String, required: true, 
        enum: ['DEN', 'LAX', 'DFW', 'SAN']
},
    arrival: Date
})

 
const flightSchema = new Schema({
    airline: { type: String,
         enum: ['American Airlines', 'Southwest', 'United Airlines', 'Delta Airlines'] 
},
    airport: { type: String,
        enum: ['DEN', 'LAX', 'DFW', 'SAN'] ,
        
},
    flightNo: { type: Number,
        required: true, min: 10, max: 9999
},
    departures: Date,

    destinations: [destinationSchema]
}, {
    timestamps: true
});



module.exports = mongoose.model('Flight', flightSchema);