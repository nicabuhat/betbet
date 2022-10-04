import React, { useContext } from 'react';
import Bubble from './Bubble';
import { BetsContext } from '../helpers/BetsProvider';

const BubblesSection = () => {
  const bets = useContext(BetsContext).bets;
  return (
    <section id='section-bubbles'>
      {bets.length > 0 &&
        bets.map((bet) => <Bubble bet={bet} key={bet.id}></Bubble>)}
    </section>
  );
};

export default BubblesSection;
