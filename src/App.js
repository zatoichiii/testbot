import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/Header/Header';

function App() {
  const { onToggleButton, tg } = useTelegram();

  useEffect(() => {
    if (tg) {
      try {
        tg.ready();
      } catch (error) {
        console.error('Error initializing Telegram WebApp:', error);
      }
    }
  }, [tg]); // Added dependency on tg

  return (
    <div className="App">
      <Header />
      {tg && (
        <button onClick={onToggleButton}>toggle</button>
      )}
    </div>
  );
}

export default App;