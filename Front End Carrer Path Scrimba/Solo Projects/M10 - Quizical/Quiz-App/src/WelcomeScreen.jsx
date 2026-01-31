// WelcomeScreen.jsx
import React from "react"

export default function WelcomeScreen({ startGame }) {
  return (
    <div className="openScreen">
      <h1>Quizzical</h1>
      <p>The quiz game</p>
      <button onClick={startGame}>Start Quiz</button>
    </div>
  )
}