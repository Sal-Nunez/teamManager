import React, { useEffect, useState } from 'react'
import {Switch, Route, useHistory, Link, useLocation} from "react-router-dom"
import axios from 'axios';
import AllPlayers from './AllPlayers';
import PlayerForm from './PlayerForm';
import Games from './Games';
const Main = (props) => {
    
    const history = useHistory()
    const location = useLocation()

    const deletePlayer = (id) => {
        if(window.confirm("Are you sure you want to delete?"))
        axios.delete(`http://localhost:8000/api/players/${id}`)
            .then( res => {
                load()
                history.push('/players/list')
            })
            .catch( err => console.error(err))
    }

    const [players, setPlayers] = useState([])

    const [loaded, setLoaded] = useState(false)

    const load = () => {
        setLoaded(!loaded)
    }

    useEffect(()=>{
        axios.get("http://localhost:8000/api/players")
            .then(res=> {
                setPlayers(res.data)
            })
            .catch(err => console.error(err))
    }, [loaded]);

    useEffect(()=>{
        if (location.pathname == "/") history.push('/players/list')
    }, []);

    return (
        <div>
            <Switch>
                <Route exact path = "/status/game">
                    <Games players={players} setLoaded={load} />
                </Route>
                <Route exact path = "/players/addplayer">
                    <Link to ="/players/list" className="btn btn-primary mt-5 me-3">List</Link>
                    <Link to ="/players/addplayer" className="btn btn-primary mt-5 me-3">Add Player</Link>
                    <PlayerForm setLoaded={load}/>
                </Route>
                <Route exact path = "/players/list">
                    <Link to ="/players/list" className="btn btn-primary mt-5 me-3">List</Link>
                    <Link to ="/players/addplayer" className="btn btn-primary mt-5 me-3">Add Player</Link>
                    <AllPlayers deletePlayer={deletePlayer} setLoaded={load} players = {players}/>
                </Route>
                <Route exact path = "/players/:id/edit">
                    <PlayerForm setLoaded={load} />
                </Route>
            </Switch>
        </div>
    )
}

export default Main