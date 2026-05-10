import { Routes, Route, Link } from "react-router-dom"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import questions from "../questions"
import LifeCard from "./LifeCard";


// ===================================================
// ===================================================
// HANDLE QUESTIONS UI AND LOGIC
// ===================================================
// ===================================================
function QuestionsCard() {

    // Activate url navigation
    // Official doc: https://reactrouter.com/api/hooks/useNavigate
    const navigate = useNavigate()

    const [questionNumber, setQuestionNumber] = useState(0);
    const [poorAnswerNumber, setPoorAnswerNumber] = useState(0);
    const [richAnswerNumber, setRichAnswerNumber] = useState(1);

    function handleAnswer(answer) {

        // Detect user answers and save them to local storage
        if (answer.type === "poor") {
            localStorage.setItem("currentQuestion", questions[questionNumber].answers[0].text)
            localStorage.setItem("currentAnswer", 'poor')
        } else {            
            localStorage.setItem("currentQuestion", questions[questionNumber].answers[1].text)
            localStorage.setItem("currentAnswer", 'rich')
        }


        navigate("/lifecard");

        // Invoke function for next question
        // nextQuestion()

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

export default QuestionsCard;
