import { useState, useEffect } from 'react';


export function useTelegram() {
    const tg = window.Telegram.WebApp;
    const [isReady, setIsReady] = useState(false);
  
    useEffect(() => {
      if (!tg.initDataUnsafe) {
        tg.ready(() => {
          setIsReady(true);
        });
      } else {
        setIsReady(true);
      }
    }, [tg]);
  
    if (!isReady) {
      return {
        error: 'Telegram Web App is not initialized',
      };
    }
  
    const onClose = () => {
      tg.close()
    }
  
    const onToggleButton = () => {
      if(tg.MainButton.isVisible) {
        tg.MainButton.hide();
      } else {
        tg.MainButton.show();
      }
    }
  
    return {
      onClose,
      onToggleButton,
      tg,
      user: tg.initDataUnsafe.user,
      queryId: tg.initDataUnsafe.query_id,
    }
  }