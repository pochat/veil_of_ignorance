import { Link } from "react-router-dom"

function NavBar() {
    return(

        <div className="navigation-container">
            <Link className="nav-link" to="/">Home</Link>
            <div>
                <Link className="nav-link" to="/gamestats">Stats</Link>
            </div>
        </div>
    )
}

export default NavBar;