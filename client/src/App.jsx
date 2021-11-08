import './App.css';
import Main from './components/Main';
import {Link} from "react-router-dom"

function App() {
    return (

        <div className="container mt-5">
            <Link className="btn btn-primary me-3" to="/players/list">Manage Players</Link>
            <Link className="btn btn-primary me-3" to="/status/game">Manage Player Status</Link>
            <Main/>
        </div>
    );
}

export default App;