import React, { useContext, useEffect, useRef, useState } from 'react';
import { BetsContext, BetsDispatchContext } from '../helpers/BetsProvider';
import { WinningDispatchContext } from '../helpers/WinningsProvider';
import {
  toggleBubblesSection,
  toggleChallengeSection,
  toggleChallengeResultSection,
  generateRandomUser,
} from '../helpers/Helpers';

const ChallengeSection = () => {
  const radioRef = useRef();
  const bets = useContext(BetsContext).bets;
  const challenge = useContext(BetsContext).challenge;
  const removeBet = useContext(BetsDispatchContext).removeBet;
  const updateWinnings = useContext(WinningDispatchContext).updateWinnings;
  const updateResult = useContext(WinningDispatchContext).updateResult;
  const updateTransactions = useContext(
    WinningDispatchContext,
  ).updateTransactions;

  const randomChallenge = async () => {
    const index = Math.floor(Math.random() * bets.length);
    const secret = Math.random() > 0.5 ? 1 : 0;
    const challenge = bets.filter((bet) => bet.id === bets[index].id)[0];
    const user = await generateRandomUser();
    const result =
      challenge.secret === secret ? challenge.bet : challenge.bet * -1;
    console.log(result);
    updateTransactions({ ...challenge, user: user }, result);
    removeBet(challenge);
  };

  useEffect(() => {
    if (bets.length > 0) {
      const interval = setInterval(
        // set number every 5s
        () => {
          if (bets.length > 0) {
            randomChallenge();
          }
        },
        10000,
      );
      return () => {
        clearInterval(interval);
      };
    }
  });

  const compareWinnings = (e) => {
    const challengeSecret = Number(e.target.value);
    const bubbleSecret = challenge.secret;
    const bet = challenge.bet;
    const result = challengeSecret === bubbleSecret ? bet : bet * -1;

    updateWinnings(result);
    updateResult(result);
    updateTransactions({ ...challenge, user: 0 }, result);
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
