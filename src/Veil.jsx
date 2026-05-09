import { Routes, Route, Link } from "react-router-dom"
// import { useEffect, useState } from 'react'
import questions from "./questions"
import GameSettings from "./components/GameSettings"
import GameStats from "./components/GameStats"
import NavBar from "./components/NavBar"
import { use, useState } from "react"


// ===================================================
// ===================================================
// HANDLE QUESTIONS UI AND LOGIC
// ===================================================
// ===================================================
function QuestionsCard() {

    const [questionNumber, setQuestionNumber] = useState(0);
    const [poorAnswerNumber, setPoorAnswerNumber] = useState(0);
    const [richAnswerNumber, setRichAnswerNumber] = useState(1);

    function handleAnswer(answer) {

        if (answer.type === "poor") {
            alert("poor")
        } else {
            alert("rich")
        }

        // Invoke function for next question
        nextQuestion()

    }

    function nextQuestion() {
        setQuestionNumber(questionNumber + 1);

    }

    return(

        <div className="container">

            {/* Player Name */}
            <h1 className="playerName">{ localStorage.getItem("playerName")}, </h1>

                {/* Question */}
                <div className="cardTopContainer">
                    <h2 className="question">{ questions[questionNumber].question }</h2>

                    {/* Two cards with answers */}
                    <div className="cardMiddleContainer">

                        {/* Answer Poor */}
                        <div className="card" onClick={() => handleAnswer(questions[questionNumber].answers[0])}>
                            <p>{ questions[questionNumber].answers[poorAnswerNumber].text }</p>
                        </div>

                        {/* Answer Rich */}
                        <div className="card" onClick={() => handleAnswer(questions[questionNumber].answers[1])}>
                            <p>{ questions[questionNumber].answers[richAnswerNumber].text }</p>
                        </div>
                    
                    </div>
            </div>

        </div>
    )
}

// ===================================================
// ===================================================
// WELCOME SCREEN WITH INTRODUCTION
// ===================================================
// ===================================================
function Welcome() {

    function handlePlayerName() {
        let playerName = localStorage.getItem("playerName")

        // Persist until a Player Name is entered
        while (!playerName || playerName === '') {
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
                <h2 className="home-subtitle">Where in society will you be born?</h2>
            </div>

            <p className="home-subtitle">
                You’ll decide how society works, but society, will decide who you are.            
            </p>


            <Link className="animated-button-capsule" onClick={ handlePlayerName } to="/question">
                Start
            </Link>

        </div>
    )
}


function MyApp() {

    return(
        <div>
            <NavBar/>
            <Routes>
                <Route path="/" element={ <Welcome /> }/>
                <Route path="/veil" element={ <QuestionsCard /> } />
                <Route path="/settings" element={ <GameSettings /> } />
                <Route path="/gamestats" element={ <GameStats /> } />
                <Route path="/question" element={ <QuestionsCard /> } />
            </Routes>
        </div>
    )
}

export default MyApp