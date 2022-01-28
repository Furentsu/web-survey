import React, {useState} from "react"
import {survey} from "./survey.js"

function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0)

  return (
    <div className="app">

      {/* Question's section ( LEFT ) */}
      <div className="question-section">

        {/* Question's count */}
        <div className="question-count">
          <span>{ currentQuestion + 1 }</span> / {survey.length}
        </div>

        {/* Question's text */}
        <div className="question-text">
          {survey[currentQuestion].questionText}
        </div>

      {/* Answer's section ( RIGHT ) */}
        <div className="answer-section">
          {survey[currentQuestion].answerOptions.map((answer) => {
            return <button>{answer.answerText}</button>
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
