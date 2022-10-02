import { WinningsProvider } from './helpers/WinningsProvider';
import { BetsProvider } from './helpers/BetsProvider';
import { toggleBetSection } from './helpers/Helpers';
import Header from './components/Header';
import BetSection from './components/BetSection';
import BubblesSection from './components/BubblesSection';
import './styles/main.scss';

function App() {
  return (
    <WinningsProvider>
      <Header />
      <main className='main'>
        <BetsProvider>
          <BetSection />
        </BetsProvider>
        <BubblesSection />
      </main>
      <footer className='footer'>
        <button
          className=' btn btn--bet'
          id='btn-bet'
          onClick={toggleBetSection}
        >
          place bet
        </button>
      </footer>
    </WinningsProvider>
  );
}

export default App;
