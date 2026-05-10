import { Link } from "react-router-dom"

// ===================================================
// ===================================================
// WELCOME SCREEN WITH INTRODUCTION
// ===================================================
// ===================================================
function Welcome() {

    function handlePlayerName() {
        let playerName = localStorage.getItem("playerName")

        // Persist until a Player Name is entered
        while (!playerName || playerName === '' || playerName === 'Not born yet') {
            playerName = prompt("How should I call you?")

            if (playerName === null) {
                alert("You must enter a name to play.")
            }
        }

        localStorage.setItem("playerName", playerName)
    }

    return(

        <div className="container">

            <div className="home-title">
                <h1>Rich or Poor.</h1>
                <h2 className="home-subtitle">How will you enter the world?</h2>
            </div>

            <p className="home-subtitle">
                You set the rules for the wealthy and the struggling. But you won't know who you are until your choices are made.           
            </p>


            <Link className="animated-button-capsule" onClick={ handlePlayerName } to="/question">
                Start
            </Link>

        </div>
    )
}

export default Welcome;