const tg = window.Telegram?.WebApp;

export function useTelegram() {
  if (!tg) {
    throw new Error("Telegram WebApp is not available");
  }

  const onClose = () => {
    tg.close();
  };

  const onToggleButton = () => {
    const mainButton = tg.MainButton;
    if (mainButton) {
      if (mainButton.isVisible) {
        mainButton.hide();
      } else {
        mainButton.show();
      }
    } else {
      console.error("MainButton is not available");
    }
  };

  return {
    onClose,
    onToggleButton,
    tg,
    user: tg.initDataUnsafe?.user || null, 
  };
}