import React from 'react';

function GuessInput({guess, handleGuessInput, handleSubmit}){
    return (
        <form className='guess-input-wrapper' onSubmit={handleSubmit}>
    <label htmlFor="guess-input">Enter Guess</label>
    <input
      required
      minLength={5}
      maxLength={5} 
      id="guess-input" 
      type="text"
      value={guess}
      onChange={(event) => {
        handleGuessInput(event)
      }}
    />
  </form>
    )
}

export default GuessInput;