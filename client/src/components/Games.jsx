import axios from 'axios'
import React, {useState} from 'react'

const Games = (props) => {

    const [gameTitle, setGameTitle] = useState("Game 1")
    const [game, setGame] = useState("game1")


    const game1 = () => {
        setGameTitle("Game 1")
        setGame("game1")
    }
    const game2 = () => {
        setGameTitle("Game 2")
        setGame("game2")
    }
    const game3 = () => {
        setGameTitle("Game 3")
        setGame("game3")
    }

    const playing = (player_id, status) => {
        status == "Playing" ?
        axios.put(`http://localhost:8000/api/game/playing/${game}/${player_id}`)
            .then( res => props.setLoaded())
            .catch( err => console.error(err))
        : status == "Not Playing" ?
        axios.put(`http://localhost:8000/api/game/not_playing/${game}/${player_id}`)
            .then( res => props.setLoaded())
            .catch( err => console.error(err))
        :
        axios.put(`http://localhost:8000/api/game/undecided/${game}/${player_id}`)
            .then( res => props.setLoaded())
            .catch( err => console.error(err))
    }


    return (
        <div className="container mt-5">
            <h1>Player Status - {gameTitle}</h1>
            <div className="row mb-5">
                <button onClick={game1} className="col-auto btn btn-primary me-3">Game 1</button>
                <button onClick={game2} className="col-auto btn btn-primary me-3">Game 2</button>
                <button onClick={game3} className="col-auto btn btn-primary me-3">Game 3</button>
            </div>
            <table className="table table-secondary">
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.players ?
                        props.players.map((player, i) =>
                            <tr key={i}>
                            <td>{player.name}</td>
                            <td>
                                {player[game].map((status, i) =>
                                <button onClick={e => playing(player._id, status.status)} key={i} className={`${status.color} text-gray-50 me-3 btn`}>{status.status}</button>
                                )}
                                </td>
                            </tr>
                        )
                        : null
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Games
