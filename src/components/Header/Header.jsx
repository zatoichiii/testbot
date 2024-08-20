import React from "react";
import { useTelegram } from "../../hooks/useTelegram";
import './Header.css';
const botToken = '6419026468:AAFWQzw6LC1JeboeO4SUxdoepDZEZt4aVzI';

const Header = (props) => {
  const { user } = useTelegram(); 

  const profilePhotos = user?.profile_photos;
  const photoUrl = profilePhotos && profilePhotos.photos[0][0].file_id;

  return (
    <div className={'header'}>
      <img src={`https://api.telegram.org/file/bot${botToken}/${photoUrl}`} alt="User Avatar" className={'avatar'} />
      <span className={'username'}>
        {user?.username || 'Unknown User'} 
      </span>
    </div>
  );
};

export default Header;