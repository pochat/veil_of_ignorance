import { Link } from "react-router-dom"
import resetLocalStorage from "../modules/resetLocalStorage"

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

        // Use Module with central reset settings
        resetLocalStorage()

        // Set the player name
        // Convert the first character to Uppercase
        if (playerName) {
            const formattedName = playerName.charAt(0).toUpperCase() + playerName.slice(1);
            localStorage.setItem("playerName", formattedName);
        }
    }

    return(

        <div className="container">

            <div className="home-title">
                <h1>Rich or Poor.</h1>
                <h2 className="home-subtitle">How will you live in this world?</h2>
            </div>

            <p className="home-subtitle">
                You set the rules for the wealthy and the struggling. But you won't know who you are until your choices are made.           
            </p>


            <Link className="animated-button-capsule" onClick={ handlePlayerName } to="/question">
                Enter this world
            </Link>

        </div>
    )
}

export default Welcome;