import { useState } from "react"
import questions from "../questions"


function LifeCard() {

    // Set States for reactive content
    const [questionNumber, setQuestionNumber] = useState(0);
    const [chosenQuestion, setChosenQuestion] = useState(localStorage.getItem('currentQuestion'))
    const [currentAnswer, setCurrentAnwer] = useState(localStorage.getItem('currentAnswer'))
    const [life, setLife] = useState(null)

    const index = localStorage.getItem('currentQuestionIndex') || 0;
    const questionBeforeLife = questions[index].questionBeforeLifeChoice;
    
    let lifeStatus = ''

    function getRandomLife() {
        const lifeOptions = ['Poor', 'Rich']
        lifeStatus = lifeOptions[Math.floor(Math.random() * lifeOptions.length)];
        setLife(lifeStatus)
    }

    return(

        <div className="container">

            <div className="lifeCard-title">
                {/* Render only if life status is on */}
                {/* React documentation: https://legacy.reactjs.org/docs/conditional-rendering.html */}
                { life === null && (
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

                {/* <h1>You Chose:</h1>
                <p className="lifeCard-subtitle">{ chosenQuestion }</p> */}

                {/* Results fade in */}
                <h1 className={`lifeCard-subtitle fade-in-result ${life ? "visible" : ""}`}>
                {life}
                </h1>

                { !life !== null && (
                <>
                <div className={`fade-in-result ${life ? "visible" : ""}`}>
                    <button className="animated-button-capsule">Cancel my life</button>
                    <button className="animated-button-capsule">Carry on with my life</button>
                </div>
                </>
                )}

            </div>
        </div>
    )
}

export default LifeCard;