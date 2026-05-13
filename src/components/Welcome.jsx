import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import resetLocalStorage from "../modules/resetLocalStorage"

// ===================================================
// ===================================================
// WELCOME SCREEN WITH INTRODUCTION
// ===================================================
// ===================================================
function Welcome() {
    const [playerName, setPlayerName] = useState(
    localStorage.getItem("playerName") || ""); // State to hold the input
    const navigate = useNavigate(); // Hook to change pages

    function handlePlayerName(e) {
        e.preventDefault(); // Stops the form from refreshing the page

        // Validation: Persist until a Player Name is entered
        const savedPlayerName = localStorage.getItem("playerName");

        if (
            (!playerName || playerName === "Not born yet") &&
            (!savedPlayerName || savedPlayerName === "Not born yet")
        ) {
            alert("How should I call you?");
            return;
        }

        // Use Module with centralized reset settings
        // Reset player if NEW
        if (playerName) {
            resetLocalStorage()
        }

        // Set the player name
        // Convert the first character to Uppercase
        if (playerName) {
            const formattedName = playerName.charAt(0).toUpperCase() + playerName.slice(1);
            localStorage.setItem("playerName", formattedName);
        }

        // Navigate to the next screen
        navigate("/question");
    }

    return(

        <div className="container">

            {/* Headings */}
            <div className="home-title">
                <h1>Rich or Poor.</h1>
                <h2 className="home-subtitle">How will you live in this world?</h2>
            </div>

            {/* Subheading */}
            <p className="home-subtitle">
                You set the rules for the wealthy and the struggling. But you won't know who you are until your choices are made.           
            </p>

            <div className="vertical-stack">
                {/* Form to capture player name and invoke its handler */}
                <form onSubmit={ handlePlayerName } className="vertical-stack">

                    {/* Only show the form if there is no player name to clean the UI */}
                    { !localStorage.getItem("playerName") || localStorage.getItem("playerName") === 'Not born yet' && (
                    <>
                        <input 
                            type="text" 
                            className="name-input"
                            placeholder="Enter your name..."
                            onChange={(e) => setPlayerName(e.target.value)}
                            />

                    {/* Form Submit name */}
                    <button type="submit" className="animated-button-capsule">
                        Enter this world
                    </button>
                    </>
                    )}
                </form>


                {/* Show button if there is a player name */}
                    { localStorage.getItem("playerName") &&
                    localStorage.getItem("playerName") !== "Not born yet" && (
                        <>
                            <Link 
                                className="animated-button-capsule"
                                onClick={ handlePlayerName }
                                to="/question"
                            >
                                { playerName }, Test your luck again
                            </Link>
                        </>
                    )}
            </div>

        </div>
    )
}

export default Welcome;