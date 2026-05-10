import { useState } from "react"

function GameStats() {

    // setStates
    const [playerName, setPlayerName] = useState(localStorage.getItem('playerName'))
    const [currentAnswer, setCurrentAnwer] = useState(localStorage.getItem('currentAnswer'))

    function resetGameStats() {

        // Remove the player name from the storage
        setPlayerName(localStorage.setItem("playerName", 'Not born yet'))
        setPlayerName("Not born yet")

        setCurrentAnwer(localStorage.clear())


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