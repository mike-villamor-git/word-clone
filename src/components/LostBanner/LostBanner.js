import React from "react";
import Banner from "../Banner/Banner";

function LostBanner({restart, answer}) {
  return (
    <Banner status="sad">
    <p>Sorry, the correct answer is <strong>{answer}</strong></p>
      <button onClick={restart}>Play Again?</button>
  </Banner>
  )
}

export default LostBanner;
