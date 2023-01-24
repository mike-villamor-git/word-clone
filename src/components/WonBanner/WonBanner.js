import React from "react";
import Banner from "../Banner/Banner";

function WonBanner({numGuesses, restart}) {
  return (
  <Banner status="happy">
    <p>
        <strong>Congratulations!</strong> Got it in <strong>{numGuesses === 1 ? `${numGuesses} guess` : `${numGuesses} guesses` }</strong>
      </p> 
      <button onClick={restart}>Play Again?</button>
  </Banner>
  )}

export default WonBanner;
