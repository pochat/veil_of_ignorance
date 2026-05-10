import { useState } from "react"


function LifeCard() {

    // Set States for reactive content
    const [chosenQuestion, setChosenQuestion] = useState(localStorage.getItem('currentQuestion'))
    const [currentAnswer, setCurrentAnwer] = useState(localStorage.getItem('currentAnswer'))

    return(

        <div className="container">
            <div className="home-title">
                <h1>Life Card</h1>
                <h2 className="home-subtitle">Your choice:</h2>
                <p className="home-subtitle">{ chosenQuestion }</p>
            </div>
        </div>
    )
}

export default LifeCard;