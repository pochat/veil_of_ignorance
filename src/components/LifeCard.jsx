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

            <div className="lifeCard-title">
                <h1>Your Choice</h1>
                <p className="lifeCard-subtitle">{ chosenQuestion }</p>
                
                {/* Hide button after is clicked */}
                { life === null && (
                    <>
                        <h2>Will you be born as rich or poor? </h2>
                        <button 
                            className="animated-button-capsule"
                            onClick={ getRandomLife }
                            >
                            Test your luck
                        </button>
                    </>
                  )}

                {/* Results fade in */}
                <p className={`lifeCard-subtitle fade-in-result ${life ? "visible" : ""}`}>
                {life}
                </p>

            </div>
        </div>
    )
}

export default LifeCard;