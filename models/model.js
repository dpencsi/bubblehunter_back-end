const mongoose = require('mongoose');

const gamerSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    score: {
        required: true,
        type: Number
    }
});

module.exports = mongoose.model('Gamer', gamerSchema);