import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import Form from './components/Form/Form';

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
  }, [tg]);

  return (
    <div className="App">
      <Header />
      <Routes>
      <Route index element={<Main />}/>
      <Route path={'/form'} element={<Form />}/>
      </Routes>
    </div>
  );
}

export default App;