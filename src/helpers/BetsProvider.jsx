import React, { createContext, useState, useEffect } from 'react';

const BetsContext = createContext();
const BetsDispatchContext = createContext();

function BetsProvider({ children }) {
  const [bets, setBets] = useState([]);

  //   useEffect(() => {
  //     updateBubbleSize(bets);
  //   });

  const updateBets = (bet) => {
    setBets([...bets, bet]);
    console.log(bets);
  };

  // const updateBubbleSize = (bets) => {
  //   const summation = (total, bet) => {
  //     return total + Number(bet.bet);
  //   };

  //   const total = bets.reduce(summation, 0);

  //   bets = bets.map((bet) => {
  //     const size = `${Math.floor((bet.bet / total) * 100 + 80)}px`;
  //     const bubble = document.getElementById(bet.id);
  //     bubble.style.height = size;
  //     bubble.style.width = size;
  //     return bet;
  //   });

  //   console.log(bets);
  // };

  return (
    <BetsContext.Provider value={bets}>
      <BetsDispatchContext.Provider value={updateBets}>
        {children}
      </BetsDispatchContext.Provider>
    </BetsContext.Provider>
  );
}

export { BetsProvider, BetsContext, BetsDispatchContext };
