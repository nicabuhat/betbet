import React, { createContext, useState } from 'react';

const WinningsContext = createContext();
const WinningspatchContext = createContext();

function WinningsProvider({ children }) {
  const [winnings, setWinnings] = useState({ totalWinnings: 0 });

  return (
    <WinningsContext.Provider value={winnings}>
      <WinningspatchContext.Provider value={setWinnings}>
        {children}
      </WinningspatchContext.Provider>
    </WinningsContext.Provider>
  );
}

export { WinningsProvider, WinningsContext, WinningspatchContext };
