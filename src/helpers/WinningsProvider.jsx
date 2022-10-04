import React, { createContext, useState } from 'react';

const WinningsContext = createContext();
const WinningDispatchContext = createContext();

function WinningsProvider({ children }) {
  const [winnings, setWinnings] = useState(0);
  const [result, setResult] = useState(null);
  const [transactions, setTransactions] = useState([]);

  const updateWinnings = (challenge) => {
    setWinnings(winnings + challenge);
  };

  const updateResult = (bet) => {
    setResult(bet > 0 ? true : false);
  };

  const updateTransactions = (transaction, result) => {
    setTransactions([
      ...transactions,
      { transaction: transaction, result: result, balance: winnings + result },
    ]);
  };

  return (
    <WinningsContext.Provider value={{ winnings, result, transactions }}>
      <WinningDispatchContext.Provider
        value={{ updateWinnings, updateResult, updateTransactions }}
      >
        {children}
      </WinningDispatchContext.Provider>
    </WinningsContext.Provider>
  );
}

export { WinningsProvider, WinningsContext, WinningDispatchContext };
