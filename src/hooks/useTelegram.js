export function useTelegram() {
    const tg = window.Telegram.WebApp;
  
    if (!tg.initDataUnsafe) {
      tg.ready();
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
      user: tg.initDataUnsafe?.user,
      queryId: tg.initDataUnsafe?.query_id,
    }
  }