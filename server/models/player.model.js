const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    name: { type: String,
    required: [true, "Name Required"]
    },
    position: {type: String, "default":"No Preference"},
    game1: { type: [Object], default: [{status: "Playing", color: "bg-dark"}, {status: "Not Playing", color: "bg-dark"}, {status: "Undecided", color: "bg-warning"}]},
    game2: { type: [Object], default: [{status: "Playing", color: "bg-dark"}, {status: "Not Playing", color: "bg-dark"}, {status: "Undecided", color: "bg-warning"}]},
    game3: { type: [Object], default: [{status: "Playing", color: "bg-dark"}, {status: "Not Playing", color: "bg-dark"}, {status: "Undecided", color: "bg-warning"}]}
}, { timestamps: true });
module.exports.Player = mongoose.model('Player', PlayerSchema);