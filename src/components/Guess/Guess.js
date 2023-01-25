import React from "react";
import { range } from "../../utils";
import { checkGuess } from '../../game-helpers'

function Guess({guess, answer}) {
  let result;
  
  if(guess !== undefined){
    result = checkGuess(guess, answer)
    console.log(result)
  }
  return (
    <p className="guess">
     {range(5).map((num) => {
      
      
      return (
      <span key={num} className={result !== undefined ? `cell ${result[num].status}` : 'cell'}>{guess ? guess[num] : undefined}</span>
    )})}
    </p>
  )
}

export default Guess;
