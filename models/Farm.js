const mongoose = require('mongoose');

// pet farm scheme
const farmSchema = mongoose.Schema({
    id: Number,
    name: String,
}, {timestamps: true});

// model for farm
const Farm = mongoose.model('Farm', farmSchema);

module.exports = Farm;