import { Routes, Route, Link } from "react-router-dom"
// import { useEffect, useState } from 'react'
import questions from "./questions"
import GameSettings from "./components/GameSettings"
import GameStats from "./components/GameStats"
import NavBar from "./components/NavBar"

function QuestionsCard() {

    return(

        <div className="container">

            {/* Player Name */}
            <h1>{ localStorage.getItem("playerName")}, </h1>

                {/* Question */}
                <div className="cardTopContainer">
                    <h2>{ questions[1].question }</h2>

                    {/* Two cards with answers */}
                    <div className="cardMiddleContainer">

                        {/* Answer One */}
                        <div className="card">
                            <p>{ questions[1].answers[0].text }</p>
                        </div>

                        {/* Answer Two */}
                        <div className="card">
                            <p>{ questions[1].answers[1].text }</p>
                        </div>
                    </div>
            </div>

        </div>
    )
}


function Welcome() {

    function handleStart() {
        if (!localStorage.getItem("playerName")) {
           let playerName = prompt("How should I call you?")
           localStorage.setItem("playerName", playerName)
        }
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


            <Link className="animated-button-capsule" onClick={handleStart} to="/question">
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