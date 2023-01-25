import React from "react";
import { checkGuess } from "../../game-helpers";

function Keyboard({handleGuessInput, guess, guesses, answer, setRevealedLetters, revealedLetters}) {

  

  React.useEffect(() => {
    if(!guesses.length) return;

    let validatedGuess = checkGuess(guesses[guesses.length - 1], answer)

    let newObj = {}
    for(let guess of validatedGuess){
      newObj[guess.letter] = guess.status
    }
    setRevealedLetters({...revealedLetters, ...newObj})
    console.log(revealedLetters)
  }, [guesses])

  const row1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
  const row2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
  const row3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']

  const handleKeyClick = (event) => {
    if (guess.length === 5) return;
    let newGuess = guess;
    newGuess += event.target.value.toUpperCase()

    handleGuessInput(newGuess)
  }
  




  return (
    <div className="keyboard-wrapper">
    <div className="keyboard-row-top">
      {row1.map((key, index) => {
        
        let className = "key";
        if (revealedLetters[key] !== undefined){
          className += " "
          className += revealedLetters[key]
        }

        return(
          <button disabled={guess.length === 5 } onClick={(event) => handleKeyClick(event)} className={className} key={`${key}-${index}`} value={key}>{key}</button>
        )
      })}
    </div>
    <div className="keyboard-row-middle">
    {row2.map((key, index) => {

        let className = "key";
        if (revealedLetters[key] !== undefined){
          className += " "
          className += revealedLetters[key]
        }
        return(
          <button onClick={(event) => handleKeyClick(event)}  className={className} key={`${key}-${index}`} value={key}>{key}</button>
        )
      })}
    </div>
    <div className="keyboard-row-bottom">
    {row3.map((key, index) => {

          let className = "key";
          if (revealedLetters[key] !== undefined){
            className += " "
            className += revealedLetters[key]
          }

        return(
          <button onClick={(event) => handleKeyClick(event)}  className={className} key={`${key}-${index}`} value={key}>{key}</button>
        )
      })}
    </div>
    </div>
  );
}

export default Keyboard;
