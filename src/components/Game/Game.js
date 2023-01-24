import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import {styles} from '../../styles.css'
import GuessInput from '../GuessInput/GuessInput'
import GuessResults from '../GuessResults/GuessResults'
import GameOver from '../GameOver/GameOver';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';

// Pick a random word on every pageload.
let answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });


function Game() {
  const [tentativeGuess, setTentativeGuess] = React.useState('');
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running')

  const handleGuessInput = (event) => {
    setTentativeGuess(event.target.value.toUpperCase())
  }

  const handleSubmitGuess = (event) => {
    event.preventDefault();

    if (tentativeGuess.length !== 5){
      window.alert('Please enter exactly 5 characters')
      return;
    }

    const nextGuesses = [...guesses, tentativeGuess]
    setGuesses(nextGuesses)
    setTentativeGuess('');


    if (tentativeGuess === answer){
      setGameStatus('won')
      return;
    }
    else if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED){
      setGameStatus('lost')
    }
   
  }

  const handleRestartGame = () => {
    answer = sample(WORDS);
    setGuesses([]);
    setTentativeGuess('')
    setGameStatus('running')
  }
  

  return (
  <>
    <GuessResults
      guesses={guesses}
      answer={answer}
    />
    <GuessInput
      disabled={gameStatus !== 'running'}
      handleGuessInput={handleGuessInput}
      handleSubmit={handleSubmitGuess}
      guess={tentativeGuess}
    />
    {gameStatus === 'won' && <WonBanner restart={handleRestartGame} numGuesses={guesses.length}/>}
    {gameStatus === 'lost' && <LostBanner restart={handleRestartGame} answer={answer}/>}
  </>
  
  
  );
}

export default Game;
