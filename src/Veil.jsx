import { Routes, Route, Link } from "react-router-dom"
import Welcome from "./components/Welcome"
import QuestionsCard from "./components/QuestionsCard"
import NavBar from "./components/NavBar"
import LifeCard from "./components/LifeCard"
import FinalScreen from "./components/FinalScreen"
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
                <Route path="/question" element={ <QuestionsCard /> } />
                <Route path="/lifecard" element={ <LifeCard /> } />
                <Route path="/finalscreen" element={ <FinalScreen /> } />
            </Routes>
        </div>
    )
}

export default MyApp