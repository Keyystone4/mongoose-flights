const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create,
    addToDetails,
    show
};

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight){
        console.log(flight);
        res.render('flights/show', { flight });
    })
}

function addToDetails(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        console.log(flight);
        flight.ticket.push(req.body.ticketId);
            flight.save(function(err) {
                res.redirect(`/flights/${flight._id}`);
        });
    });
}
    
function create(req, res) {
    req.body.price = 0;
  Ticket.create(req.body, function (err, ticket) {
    res.redirect(`/flights/${flight._id}`);
  });
}

function newTicket(req, res) {
    Ticket.find({})
    console.log(Ticket)
    .sort('seat')
    .exec(function (err, tickets) {
        res.render('tickets/new', {
            title: 'Add Ticket',
            tickets
        });
    });
}