import { useState } from "react"


function LifeCard() {

    // Set States for reactive content
    const [chosenQuestion, setChosenQuestion] = useState(localStorage.getItem('currentQuestion'))
    const [currentAnswer, setCurrentAnwer] = useState(localStorage.getItem('currentAnswer'))
    const [life, setLife] = useState(null)

    let lifeStatus = ''

    function getRandomLife() {
        const lifeOptions = ['Poor', 'Rich']
        lifeStatus = lifeOptions[Math.floor(Math.random() * lifeOptions.length)];
        setLife(lifeStatus)
    }

    return(

        <div className="container">
            <div className="home-title">
                <h1>Life Card</h1>
                <h2 className="home-subtitle">Your choice:</h2>
                <p className="home-subtitle">{ chosenQuestion }</p>
                <h3>Will you be born as rich or poor? </h3>
                <button 
                className="animated-button-capsule"
                onClick={ getRandomLife }
                >
                    Roll the dice
                </button>

                <p>Life status: { life }</p>

            </div>
        </div>
    )
}

export default LifeCard;