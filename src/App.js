import React from 'react';
import { WinningsProvider } from './helpers/WinningsProvider';
import { BetsProvider } from './helpers/BetsProvider';
import { toggleBetSection } from './helpers/Helpers';
import Header from './components/Header';
import CashTabSection from './components/CashTabSection';
import BetSection from './components/BetSection';
import BubblesSection from './components/BubblesSection';
import ChallengeSection from './components/ChallengeSection';
import ChallengeResultSection from './components/ChallengeResultSection';
import ResultListSection from './components/ResultListSection';
import './styles/main.scss';

function App() {
  return (
    <WinningsProvider>
      <Header />
      <main className='main'>
        <BetsProvider>
          <CashTabSection />
          <BetSection />
          <BubblesSection />
          <ChallengeSection />
          <ChallengeResultSection />
        </BetsProvider>
      </main>
      <footer id='footer'>
        <button
          className=' btn btn--bet'
          id='btn-bet'
          onClick={toggleBetSection}
        >
          place bet
        </button>
        <ResultListSection />
      </footer>
    </WinningsProvider>
  );
}

export default App;
