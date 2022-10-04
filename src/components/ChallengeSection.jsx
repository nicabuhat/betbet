import React, { useContext, useRef } from 'react';
import { BetsContext, BetsDispatchContext } from '../helpers/BetsProvider';
import { WinningDispatchContext } from '../helpers/WinningsProvider';
import {
  toggleBubblesSection,
  toggleChallengeSection,
  toggleChallengeResultSection,
} from '../helpers/Helpers';

const ChallengeSection = () => {
  const radioRef = useRef();

  const challenge = useContext(BetsContext).challenge;
  const removeBet = useContext(BetsDispatchContext).removeBet;
  const updateWinnings = useContext(WinningDispatchContext).updateWinnings;
  const updateResult = useContext(WinningDispatchContext).updateResult;
  const updateTransactions = useContext(
    WinningDispatchContext,
  ).updateTransactions;

  const compareWinnings = (e) => {
    const challengeSecret = Number(e.target.value);
    const bubbleSecret = challenge.secret;
    const bet = challenge.bet;
    const result = challengeSecret === bubbleSecret ? bet : bet * -1;

    updateWinnings(result);
    updateResult(result);
    updateTransactions(challenge, result);
    removeBet(challenge);
    radioRef.current.checked = false;

    toggleChallengeSection();
    toggleChallengeResultSection();
    toggleBubblesSection();
  };
  return (
    <section id='section-challenge'>
      <form id='challenge-form'>
        <label className='label label--challenge'>
          <input
            type='radio'
            name='challenge'
            className='challengeInput'
            value='0'
            ref={radioRef}
            onChange={compareWinnings}
          />
          <span>0</span>
        </label>
        <label className='label label--challenge'>
          <input
            type='radio'
            name='challenge'
            className='challengeInput'
            value='1'
            ref={radioRef}
            onChange={compareWinnings}
          />
          <span>1</span>
        </label>
      </form>
      <h2>choose a number</h2>
    </section>
  );
};

export default ChallengeSection;
