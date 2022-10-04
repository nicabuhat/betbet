import React, { useContext } from 'react';
import { WinningsContext } from '../helpers/WinningsProvider';
import { BetsContext } from '../helpers/BetsProvider';
import { toggleChallengeResultSection } from '../helpers/Helpers';
const ChallengeResultSection = () => {
  const result = useContext(WinningsContext).result;
  const winnings = useContext(WinningsContext).winnings;
  const challenge = useContext(BetsContext).challenge;

  return (
    <section id='section-challenge-result'>
      {result && (
        <div>
          <h1>
            Congratulations! <br></br>You win {challenge.bet} XEC
          </h1>
          <h2>Your total wallet amount is {winnings} XEC</h2>
        </div>
      )}
      {!result && (
        <div>
          <h1>
            Ooops! You lose {challenge.bet} XEC, <br></br>better luck next time
          </h1>
          <h2>Your total wallet amount is {winnings} XEC</h2>
        </div>
      )}
      <button className='btn' onClick={toggleChallengeResultSection}>
        Return to Challenge
      </button>
    </section>
  );
};

export default ChallengeResultSection;
