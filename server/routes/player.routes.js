const PlayerController = require('../controllers/player.controller')

module.exports = app => {
    app.get('/api', PlayerController.index)
    app.post('/api/players', PlayerController.createPlayer)
    app.get('/api/players', PlayerController.allPlayers)
    app.get('/api/players/:id', PlayerController.onePlayer)
    app.put('/api/players/:id', PlayerController.editPlayer)
    app.delete('/api/players/:id', PlayerController.deletePlayer)
    app.put('/api/game/playing/:game/:id', PlayerController.gamePlaying)
    app.put('/api/game/not_playing/:game/:id', PlayerController.gameNotPlaying)
    app.put('/api/game/undecided/:game/:id', PlayerController.gameUndecided)
}