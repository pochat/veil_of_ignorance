import { useNavigate } from "react-router-dom";
import { finalScreen } from "../modules/finalScreen";

function FinalScreen() {

    // Pull the logic from the finalScreen module to final data
    const finalData = finalScreen()

    return(

        
        <div className="container">
            <div className="home-title">
                <h1>Your life at a glance</h1>
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

        </div>

    )
}

export default FinalScreen;