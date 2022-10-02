// import React, { createContext, useState } from 'react';

// const BubblesContext = createContext();
// const BubbleDispatchContext = createContext();

// function BubblesProvider({ children }) {
//   const def = { id: 0, bet: 0, secret: null, size: 0 };
//   const [bubble, setBubble] = useState(new Bubble(def));

//   const updateBubble = (b) => {
//     setBubble({ b });
//   };
//   return (
//     <BubblesContext.Provider value={bubble}>
//       <BubbleDispatchContext.Provider value={{ updateBubble }}>
//         {children}
//       </BubbleDispatchContext.Provider>
//     </BubblesContext.Provider>
//   );
// }

// export { BubblesProvider, BubblesContext, BubbleDispatchContext };
