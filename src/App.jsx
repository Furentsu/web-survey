import React, {useState} from "react"
import {survey} from "./survey.js"

function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showResults, setShowResults] = useState(false)

  function handleClick(correctAnswer) {
    if(correctAnswer) {
      setScore(score + 1)
    }
    if ((currentQuestion + 1) < survey.length) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(!showResults)
    }
  }

  return (
    <div className="app">

      {
        showResults ? ( 
          <>
            <div className="results-section">
              You scored {score} out of {survey.length}:
            </div>

            <div className="results-answers">
                {survey.map((question) => {
                  return question.answerOptions.map((answer) => {
                    if (answer.isCorrect) {
                      return <button className="results" >{answer.answerText}</button>
                    }
                  })
                })}
            </div>
          </>
        ) : (

          <>
          
            {/* Question's section ( LEFT ) */}
            <div className="question-section">

              <div className="questions">

                {/* Question's count */}
                <div className="question-count">
                  <span>Question { currentQuestion + 1 }</span> / {survey.length}
                </div>

                {/* Question's text */}
                <div className="question-text">
                  {survey[currentQuestion].questionText}
                </div>
              </div>


              {/* Answer's section ( RIGHT ) */}
              <div className="answer-section">
              {survey[currentQuestion].answerOptions.map((answer) => {
                  return <button className="answer" onClick={() => handleClick(answer.isCorrect)}>{answer.answerText}</button>
                })}
              </div>
            </div>

          </>
      )}

    </div>
  );
}

export default App;