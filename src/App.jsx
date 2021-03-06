import React, {useState} from "react"
import {survey} from "./survey.js"


function App() {

  // States
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showResults, setShowResults] = useState(false)

  // Functions
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

  function reset() {
    setCurrentQuestion(0)
    setScore(0)
    setShowResults(false)
  }

  // Component's structure
  return (
    <div className="app">

      {
        // Final score with correct and wrong answers + restart button
        showResults ? ( 
          <>
            <div className="results-container">

              <div className="score">
                You scored <span>{score}</span> out of {survey.length}:
              </div>
              
              {survey.map((question) => {
                return (
                  <div className="results_question">

                    <div className="results_question-text">
                      {question.questionText}
                    </div>

                    <div className="results_question-answers">
                      {question.answerOptions.map((answer) => {
                        return <button className={`results_button ${answer.isCorrect ? "correct" : "wrong"}`} >{answer.answerText}</button>
                      })}
                    </div>
                    
                  </div>
                )})}

              <div className="restart">
                <button className="restart-button" onClick={reset}>Restart</button>
              </div>
            </div>           
          </>
        ) : (

          <>
            {/* Survey's questions and answers. Displayed only if showResults = false. */}

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