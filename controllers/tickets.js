const Ticket = require('../models/ticket');
const Flight = require('../models/flight');
const ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create,
    addToDetails
};


function addToDetails(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets) {
             flight.save(function(err) {
                res.redirect(`/flights/${flight._id}`);
                
        })
           
        });
    });
}
    
function create(req, res) {
    req.body.price = '0';
  Ticket.create(req.body, function (err, ticket) {
    res.redirect('/tickets/new');
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