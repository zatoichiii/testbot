import React from "react";
import { useTelegram } from "../../hooks/useTelegram";
import './Header.css';

const Header = (props) => {
  const { user, onClose } = useTelegram(); 

  return (
    <div className={'header'}>
      <img src={user?.profile_photo_url} alt="User Avatar" className={'avatar'} />
      <span className={'username'}>
        {user?.username || 'Unknown User'} 
      </span>
    </div>
  );
};

export default Header;