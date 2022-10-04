import React, { createContext, useState, useEffect } from 'react';

const BetsContext = createContext();
const BetsDispatchContext = createContext();

function BetsProvider({ children }) {
  const [bets, setBets] = useState([]);
  const [challenge, setChallenge] = useState({});

  useEffect(() => {
    if (bets.length > 0) {
      updateBubbleSize(bets[bets.lenght - 1]);
    }
  });

  const updateBets = (bet) => {
    const id = '_id' + Math.random().toString(16).slice(2);
    setBets([...bets, { ...bet, id: id, size: 0 }]);
  };

  const removeBet = (bet) => {
    setBets(bets.filter((b) => b.id !== bet.id));
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

  const getBubbleClicked = (bet) => {
    setChallenge(bet);
  };

  return (
    <BetsContext.Provider value={{ bets, challenge }}>
      <BetsDispatchContext.Provider
        value={{ updateBets, removeBet, getBubbleClicked }}
      >
        {children}
      </BetsDispatchContext.Provider>
    </BetsContext.Provider>
  );
}

export { BetsProvider, BetsContext, BetsDispatchContext };
