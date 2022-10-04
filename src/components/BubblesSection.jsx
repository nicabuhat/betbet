import React, { useContext, useState } from 'react';
import Bubble from './Bubble';
import { BetsContext, BetsDispatchContext } from '../helpers/BetsProvider';

const BubblesSection = () => {
  const bets = useContext(BetsContext);
  return (
    <section id='section-bubbles'>
      {bets.length > 0 && bets.map((bet) => <Bubble bet={bet} key={bet.id} />)}
    </section>
  );
};

export default BubblesSection;
