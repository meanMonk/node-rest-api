var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var snpModel = new Schema({
    name: {
        type: String
    },
    type: {
        type: String
    },
    units: {
        type: String
    },
    taxRates: {
        type: Number,
        default: 0
    },
    hsnCode : {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    rates: {
        type: Number,
        default: 0
    },
    quantity: {
        type: Number,
        default: 0
    },
    value: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('serviceAndProduct', snpModel);