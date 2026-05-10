import { Routes, Route, Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import questions from "../questions"

function LifeCard() {

    // Set States for reactive content
    const [chosenQuestion, setChosenQuestion] = useState(localStorage.getItem('currentQuestion'))
    const [currentPlayerChoice, setCurrentPlayerChoice] = useState(localStorage.getItem('currentPlayerChoice'))
    const [assignedLife, setAssignedLife] = useState(null)
    const [outcome, setOutcome] = useState("");

    // Get question index from storage
    // Convert to Number (not a string)
    let index = Number(localStorage.getItem('questionIndex') || 0);
    const questionBeforeLife = questions[index].questionBeforeLifeChoice;
    
    // DEBUG
    // console.log("Life value at the top of the code: ", assignedLife);

    // Activate url navigation
    // Official doc: https://reactrouter.com/api/hooks/useNavigate
    const navigate = useNavigate()

    // Logic to assign a life (rich/poor) to the Player
    function getRandomLife() {

        // Define life options in array
        const lifeOptions = ['poor', 'rich']

        // Randomize the options
        const assignedRandomLife = lifeOptions[Math.floor(Math.random() * lifeOptions.length)];

        // Update the state
        setAssignedLife(assignedRandomLife)
        // console.log("This is the updated current value:", assignedRandomLife);
        
        // Initialize outcome to capture from questions.js
        let assignedLifeOutcome = ''
        
        // Compare current life to playersChoice
        if (currentPlayerChoice === 'poor') {
            
            // They are POOR (answers[0])
            if (assignedRandomLife === 'poor') {
                assignedLifeOutcome = questions[index].answers[0].outcomes.poor;
            } else {
                assignedLifeOutcome = questions[index].answers[0].outcomes.rich;
            }

        } else {
            
            // They are RICH (answers[1])
            if (assignedRandomLife === 'poor') {
                assignedLifeOutcome = questions[index].answers[1].outcomes.poor;
            } else {
                assignedLifeOutcome = questions[index].answers[1].outcomes.rich;
            }
        }

        setOutcome(assignedLifeOutcome)

    }

    function nextQuestion() {


        // Retrieve current question index
        index = Number(localStorage.getItem("questionIndex"))

        if (index + 1 < questions.length) {

            // Overwrite current question index + 1
            localStorage.setItem("questionIndex", Number(index + 1))
            
            // Go to next question
            navigate("/question");
        } else {
            alert("Game over")
        }

    }


    return(

        <div className="container">

            <div className="lifeCard-title">
                {/* Render only if life status is on */}
                {/* React documentation: https://legacy.reactjs.org/docs/conditional-rendering.html */}
                { assignedLife === null && (
                    <>
                        <h2> { questionBeforeLife } </h2>
                        <button 
                            className="animated-button-capsule"
                            onClick={ getRandomLife }
                            >
                            Test your luck
                        </button>
                    </>
                  )}

                {/* Results fade in */}
                <h1 className={`lifeCard-subtitle fade-in-result ${assignedLife ? "visible" : ""}`}>
                Your Fate: {assignedLife}
                </h1>

                { !assignedLife !== null && (
                <>
                {/* Terniary, if true do this, or else */}
                <div className={`fade-in-result ${assignedLife ? "visible" : ""}`}>
                    <p className="lifeCard-subtitle">You chose: {chosenQuestion}</p>
                    <p className="lifeCard-subtitle">{ outcome }</p>
                    <button className="animated-button-capsule">Cancel my life</button>
                    <button 
                    onClick={ nextQuestion }
                    className="animated-button-capsule"
                    >Carry on with my life
                    </button>
                </div>
                </>
                )}

            </div>
        </div>
    )
}

export default LifeCard;