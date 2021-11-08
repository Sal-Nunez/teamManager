const {Player} = require('../models/player.model')


module.exports.index = (req, res) => {
    res.json({message: 'Hello World'})
}

module.exports.allPlayers = (req, res) => {
    Player.find()
        .then( players => res.json(players))
        .catch(err => res.json(err))
}

module.exports.createPlayer = (req, res) => {
    const { name, position } = req.body
    Player.create({name: name, position: position != "" ? position : "Undecided"})
        .then(player => res.json(player))
        .catch(err => res.status(400).json(err))
}

module.exports.onePlayer = (req, res) => {
    Player.findOne({_id: req.params.id})
        .then( player => {
            res.json(player)
        })
        .catch(err => res.json(err))
}

module.exports.editPlayer = (req, res) => {
    const { name, position } = req.body
    if (position == "") position = "Undecided"
    // USE SET HERE OR SOMETHING FOR UPDATE
    Player.findOneAndUpdate({_id: req.params.id}, {$set: { name: name, position: position}}, {new:true, runValidators: true})
        .then(player => res.json(player))
        .catch(err => res.status(400).json(err))
}

module.exports.deletePlayer = (req, res) => {
    Player.deleteOne({_id: req.params.id})
        .then(player => res.json(player))
        .catch(err => res.json(err))
}

module.exports.gamePlaying = (req, res) => {
    const {game, id} = req.params
    Player.findOneAndUpdate({_id: id}, {$set: { [game]: [{status: "Playing", color: "bg-success"}, {status: "Not Playing", color: "bg-dark"}, {status: "Undecided", color: "bg-dark"}]}}, {new:true})
        .then(player => res.json(player))
        .catch(err => res.json(err))
}
module.exports.gameNotPlaying = (req, res) => {
    const {game, id} = req.params
    Player.findOneAndUpdate({_id: id}, {$set: { [game]: [{status: "Playing", color: "bg-dark"}, {status: "Not Playing", color: "bg-danger"}, {status: "Undecided", color: "bg-dark"}]}}, {new:true})
        .then(player => res.json(player))
        .catch(err => res.json(err))
}
module.exports.gameUndecided = (req, res) => {
    const {game, id} = req.params
    Player.findOneAndUpdate({_id: id}, {$set: { [game]: [{status: "Playing", color: "bg-dark"}, {status: "Not Playing", color: "bg-dark"}, {status: "Undecided", color: "bg-warning"}]}}, {new:true})
        .then(player => res.json(player))
        .catch(err => res.json(err))
}