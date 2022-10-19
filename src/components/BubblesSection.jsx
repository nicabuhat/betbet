import React, { useContext, useEffect, useState } from 'react';
import Bubble from './Bubble';
import { BetsContext, BetsDispatchContext } from '../helpers/BetsProvider';

const BubblesSection = () => {
  const bets = useContext(BetsContext).bets;
  const updateBets = useContext(BetsDispatchContext).updateBets;
  const [randomBubble, setRandomBubble] = useState({});

  const randomBet = () => {
    let value = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
    let secret = Math.random() > 0.5 ? 1 : 0;
    let bet = { bet: value, secret: secret, user: 0 };
    return bet;
  };

  useEffect(() => {
    const interval = setInterval(
      // set number every 5s
      () => {
        if (bets.length > 0 && bets.length < 3) {
          setRandomBubble(randomBet());
          updateBets(randomBubble);
        }
      },
      5000,
    );
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <section id='section-bubbles'>
      {bets.length > 0 &&
        bets.map((bet) => <Bubble bet={bet} key={bet.id}></Bubble>)}
    </section>
  );
};

export default BubblesSection;
