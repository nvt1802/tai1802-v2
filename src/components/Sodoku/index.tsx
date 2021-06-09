import React from "react"
import { Game } from "./Game"
import "./sodoku.css"
import { SudokuProvider } from "./context/SudokuContext"

/**
 * App is the root React component.
 */
const Sodoku: React.FC<{}> = () => {
  return (
    <SudokuProvider>
      <Game />
    </SudokuProvider>
  )
}

export default Sodoku