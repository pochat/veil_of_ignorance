import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { finalScreen } from "../modules/finalScreen";
import resetLocalStorage from "../modules/resetLocalStorage"

function FinalScreen() {

    // Pull the logic from the finalScreen module to final data
    const finalData = finalScreen()

    // setStates
    const [playerName, setPlayerName] = useState(localStorage.getItem('playerName'))
    
    // Update as soon as the reset button is pressed.
    const [currentPlayerChoice, setCurrentPlayerChoice] = useState(localStorage.getItem('currentPlayerChoice'))

    function resetGameStats() {

        // Use Module with central reset settings
        resetLocalStorage()
        setPlayerName(localStorage.getItem('playerName'))
    }

    return(

        
        <div className="container">
            <div className="home-title">
                <h2>{ playerName }, your life at a glance:</h2>
                <div className="horizontalLine" />
                <h2>{ finalData.currentPlayerChoiceRich } times you chose to be Rich</h2>
                <h2>{ finalData.currentPlayerChoicePoor } times you chose to be Poor</h2>
            </div>

            <div className="home-subtitle">
                <h2>The world gave you wealth { finalData.currentFateRich } times</h2>
                <h2>The world gave you nothing { finalData.currentFatePoor } times</h2>
            </div>

            <div className="home-title">
                <h1>Your Personality:</h1>
            </div>
            <div className="home-subtitle">
                <h2>{ finalData.lifestyle }</h2>
            </div>

            <button 
                onClick={ resetGameStats}
                className="animated-button-capsule"
                >
                Reset Game stats
            </button>
        </div>

    )
}

export default FinalScreen;