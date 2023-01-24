import React from "react";
import Guess from "../Guess/Guess";


function GameOver({gameStatus, restart, answer, numGuesses}) {
  
  if (gameStatus === 'won') return (
    <div className='happy banner'>
      <p>
        <strong>Congratulations!</strong> Got it in <strong>{numGuesses === 1 ? `${numGuesses} guess` : `${numGuesses} guesses` }</strong>
      </p> 
      <button onClick={restart}>Play Again?</button>
    </div>
  )
  else if (gameStatus === 'lost') return (
    <div className="sad banner">
      <p>Sorry, the correct answer is <strong>{answer}</strong></p>
      <button onClick={restart}>Play Again?</button>
    </div>
  )
}

export default GameOver;
