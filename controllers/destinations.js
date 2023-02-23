const Flight = require('../models/flight');

module.exports = {
    create,
    show
};

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        res.render('flights/show', { flight });
    })
}
        
        
       

function create(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        console.log(flight);
        flight.destinations.push(req.body);
            flight.save(function(err) {
                res.redirect(`/flights/${flight._id}`);
        });
    });
}

//