import { Routes, Route, Link } from "react-router-dom"
import Welcome from "./components/Welcome"
import GameSettings from "./components/GameSettings"
import QuestionsCard from "./components/QuestionsCard"
import GameStats from "./components/GameStats"
import NavBar from "./components/NavBar"
import { use, useState } from "react"


// ===================================================
// ===================================================
// GROUP ALL LOGIC INTO MYAPP
// ===================================================
// ===================================================
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