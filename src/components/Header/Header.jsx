import React from "react";
import Button from "../Button/Button";
import { useTelegram } from "../../hooks/useTelegram";
import './Header.css';

const Header = (props) => {
  const { user, onClose } = useTelegram(); 

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