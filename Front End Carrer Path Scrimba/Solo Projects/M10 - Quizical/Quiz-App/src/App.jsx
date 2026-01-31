// App.jsx
import React, { useState } from "react"
import WelcomeScreen from "./WelcomeScreen.jsx"
import GameScreen from "./GameScreen.jsx"
import "./style.css"

export default function App() {
  const [gameStart, setGameStart] = useState(true)

  function startGame() {
    setGameStart(prev => !prev)
  }

  return (
    <>
      {!gameStart && <WelcomeScreen startGame={startGame} />}
      {gameStart && <GameScreen />}
    </>
  )
}