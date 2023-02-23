const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    index,
    create,
    show
    
};



function show(req, res) {
    Flight.findById(req.params.id, function(err, flight){
        console.log(flight);
        res.render('flights/show', { flight });
    })
    
    
}

function create(req, res) {
    console.log(req.body)
    const flight = new Flight(req.body);
    flight.save(function(err) {
        // if we dont redirect, the newpage will be shown with /flights in the 
        // address bar 
        if (err) return res.redirect('/flights/new');
        
        res.redirect('/flights')
        
    })
}

function index(req, res) {
    Flight.find({}, function(err, flights){
        res.render('flights/index', { flights });
    });
    
}

function newFlight(req, res) {
    res.render('flights/new');
}