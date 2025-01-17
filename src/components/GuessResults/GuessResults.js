import React from "react";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessResults({guesses, answer}) {
  console.log(answer)
  return (
    <div className="guess-results">
     {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
      return ( 
      <Guess
        key={num}
        guess={guesses[num]}
        answer={answer}
      /> 
      )
     })}
    </div>
  )
}

export default GuessResults;
