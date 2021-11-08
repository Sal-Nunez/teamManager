import React from 'react'
import {Link} from 'react-router-dom'


const AllPlayers = (props) => {



    return (
        <div className="mt-5">
            <h1>ALL Players HERE</h1>
            <table className="table table-secondary">
                <thead>
                    <tr>
                        <th>_ID</th>
                        <th>Player Name</th>
                        <th>Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.players.map((player, i) => 
                    <tr key={i}>
                        <td>{player._id}</td>
                        <td>{player.name}</td>
                        <td>{player.position}</td>
                        <td>
                            {/* <Link className="btn btn-primary me-3" to={`/players/${player._id}`}>Details</Link>
                            <Link className="btn btn-warning me-3" to={`/players/${player._id}/edit`}>Edit</Link> */}
                            <button onClick={ e => props.deletePlayer(player._id)} className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default AllPlayers
