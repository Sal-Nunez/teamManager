import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
const PlayerSearch = () => {

    const [id, setId] = useState("")
    const history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault();
        history.push('/players/' + id)
    }

    return (
        <>
        <form className="mt-5" onSubmit={submitHandler}>
            <input className="me-3" type="text" onChange={e => setId(e.target.value)} />
            <button className="btn btn-primary">Submit</button>
        </form>
        </>
    )
}

export default PlayerSearch
