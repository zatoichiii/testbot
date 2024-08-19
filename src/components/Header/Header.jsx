import React from "react";
import Button from "../Button/Button";
import { useTelegram } from "../../hooks/useTelegram";

const Header = (props) => {
  const { user, onClose } = useTelegram(); // Added parentheses

  return (
    <div className={'header'}>
      <Button onClick={onClose}>Закрыть</Button>
      <span className={'username'}>
        {user?.username || 'Unknown User'} 
      </span>
    </div>
  );
};

export default Header;