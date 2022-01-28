import React, {useState} from "react"
import {survey} from "./survey.js"

function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0)

  return (
    <div className="app">

      {/* Question's section ( LEFT ) */}
      <div className="questions">

        {/* Question's count */}
        <div className="question-count">
          <span>{ currentQuestion + 1 }</span> / {currentQuestion.length}
        </div>

        {/* Question's text */}
        <div className="question-text">
          {survey[currentQuestion].questionText}
        </div>
        
      </div>
    </div>
  );
}

export default App;
