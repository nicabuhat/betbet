import React, { createContext, useState, useEffect } from 'react';
import BetSection from '../components/BetSection';
import BubblesSection from '../components/BubblesSection';
import Bubble from '../components/Bubble';

const BetsContext = createContext();
const BetsDispatchContext = createContext();

function BetsProvider({ children }) {
  const [bets, setBets] = useState([]);

  useEffect(() => {
    updateBubbleSize(bets);
  });

  const updateBets = (bet) => {
    const id = '_id' + Math.random().toString(16).slice(2);
    setBets([...bets, { ...bet, id: id, size: 0 }]);
  };

  const updateBubbleSize = (bet) => {
    const summation = (total, bet) => {
      return total + Number(bet.bet);
    };

    const total = bets.reduce(summation, 0);

    bets.map((bet) => {
      const size = `${Math.floor((bet.bet / total) * 100 + 80)}px`;
      const bubble = document.getElementById(bet.id);
      bubble.style.height = size;
      bubble.style.width = size;
      return { ...bubble, size: size };
    });
  };

  return (
    <BetsContext.Provider value={bets}>
      <BetsDispatchContext.Provider value={updateBets}>
        {children}
      </BetsDispatchContext.Provider>
    </BetsContext.Provider>
  );
}

export { BetsProvider, BetsContext, BetsDispatchContext };
