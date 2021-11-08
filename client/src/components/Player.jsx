import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

const Player = (props) => {

    const [player, setPlayer] = useState({});
    const {id} = useParams();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/players/${id}`)
            .then(res => {
                setPlayer(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h1>Player</h1>
                <div>
                    <p>Name: {player.name}</p>
                    <p>Position: {player.position}</p>
                    <button onClick={ e => props.deletePlayer(player._id)} className="btn btn-danger mt-3">Delete</button>
                </div>
        </div>
    )
}

export default Player
