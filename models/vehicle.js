const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Vehicle = db.model('Vehicle', {
    _id: { type: Schema.Types.ObjectId, auto: true },
    name: String,
    capacity: Number,
    range: Number,
    fuel: String,
});

module.exports = Vehicle;