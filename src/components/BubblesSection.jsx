import React, { useContext, useEffect, useState } from 'react';
import Bubble from './Bubble';
import { BetsContext, BetsDispatchContext } from '../helpers/BetsProvider';
import { generateRandomUser } from '../helpers/Helpers';

const BubblesSection = () => {
  const bets = useContext(BetsContext).bets;
  const updateBets = useContext(BetsDispatchContext).updateBets;
  const [randomBubble, setRandomBubble] = useState({});

  const randomBet = async () => {
    const value = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
    const secret = Math.random() > 0.5 ? 1 : 0;
    const user = await generateRandomUser();
    const bet = { bet: value, secret: secret, user: user };
    return bet;
  };

  useEffect(() => {
    const interval = setInterval(
      // set number every 5s
      async () => {
        if (bets.length > 0 && bets.length < 3) {
          setRandomBubble(await randomBet());
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
