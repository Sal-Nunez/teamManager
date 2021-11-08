import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'

const PlayerForm = (props) => {

    const history = useHistory()
    const {id} = useParams()
    const [name, setName] = useState("")
    const [position, setPosition] = useState("")
    const [errName, setErrName] = useState("")
    const [errPosition, setErrPosition] = useState("")

    useEffect(() => {
        if (id){
            axios.get(`http://localhost:8000/api/players/${id}`)
                .then( res => {
                    setName(res.data.name)
                    setPosition(res.data.position)
                })
                .catch( err => console.error(err))
        } else {
            setName("")
            setPosition("")
        }
    }, [])

    const onSubmit = e => {
        e.preventDefault()
        if (!id) {
            axios.post('http://localhost:8000/api/players', { name, position })
                .then(res => {
                    props.setLoaded()
                    setName("")
                    setPosition("")
                    history.push('/players/list')
                })
                .catch(err => {
                    if(err.response.data.errors.name) setErrName(err.response.data.errors.name.message)
                    else setErrName("")
                    if(err.response.data.errors.position) setErrPosition(err.response.data.errors.position.message)
                    else setErrPosition("")
                })
        } else {
            if(position == null) setPosition("Undecided")
            axios.put(`http://localhost:8000/api/players/${id}`, {name, position})
                .then( res => {
                    props.setLoaded()
                    history.push('/players/list')
                })
                .catch(err => {
                    console.log(err.response)
                    if(err.response.data.errors) {
                        if(err.response.data.errors.name) setErrName(err.response.data.errors.name.message)
                        else setErrName("")
                        if(err.response.data.errors.position) setErrPosition(err.response.data.errors.position.message)
                        else setErrPosition("")
                    }
                })
        }
    }

    return (
        <form className="mt-5" onSubmit={onSubmit}>
            <div className="mb-3">
            <label className="me-3">Name: </label>
            <input onChange={ e => setName(e.target.value) } value={name} type="text" />
            <p className="text-danger">{errName}</p>
            </div>
            <div className="mb-3">
                <label className="me-3">Position: </label>
                <input value={position} onChange={ e => setPosition(e.target.value) }type="text" />
                <p className="text-danger">{errPosition}</p>
            </div>
            <button className="btn bg-gray-300 text-black" >Submit</button>
        </form>
    )
}

export default PlayerForm