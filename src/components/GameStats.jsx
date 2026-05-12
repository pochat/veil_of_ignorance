import { useState } from "react"
import resetLocalStorage from "../modules/resetLocalStorage"

function GameStats() {

    // setStates
    const [playerName, setPlayerName] = useState(localStorage.getItem('playerName'))
    const [currentPlayerChoice, setCurrentPlayerChoice] = useState(localStorage.getItem('currentPlayerChoice'))

    function resetGameStats() {

        // Use Module with central reset settings
        resetLocalStorage()
        setPlayerName(localStorage.getItem('playerName'))
    }

    return(
        <div className="container">
            <div className="home-title">
                <h1>Game Stats</h1>
                <h2>Player Name: { playerName }</h2>
                <button 
                    onClick={ resetGameStats}
                    className="animated-button-capsule"
                    >
                    Reset Game stats
                </button>
            </div>
        </div>
    )
}

export default GameStats