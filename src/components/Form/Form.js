import React, { useCallback, useEffect, useState } from 'react';
import './Form.css';
import { useTelegram } from "../../hooks/useTelegram";

const Form = () => {
  const [userName, setUserName] = useState('');
  const [userPoints, setUserPoints] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [publicationType, setPublicationType] = useState('public');
  const { tg } = useTelegram();

  const onSendData = useCallback(() => {
    if (tg) {
      const data = {
        userName,
        userPoints,
        userMessage,
        publicationType
      };
      tg.sendData(JSON.stringify(data));
    }
  }, [userName, userPoints, userMessage, publicationType, tg]);

  useEffect(() => {
    if (tg) {
      tg.MainButton.hide();
    }
  }, [tg && tg.MainButton]);

  useEffect(() => {
    if (tg) {
      if (!userPoints || !userName) {
        tg.MainButton.hide();
      } else {
        tg.MainButton.show();
      }
    }
  }, [userName, userPoints, tg && tg.MainButton]);

  if (!tg) {
    return <div>Telegram Web App is not initialized</div>;
  }

  const onChangeUserName = (e) => {
    setUserName(e.target.value);
  };

  const onChangeUserPoints = (e) => {
    setUserPoints(e.target.value);
  };

  const onChangeUserMessage = (e) => {
    setUserMessage(e.target.value);
  };

  const onChangePublicationType = (e) => {
    setPublicationType(e.target.value);
  };

  return (
    <div className={"form"}>
      <h3>Кому вы хотите отдать спасибо?</h3>
      <input
        className={'input'}
        type="text"
        placeholder={'Имя'}
        value={userName}
        onChange={onChangeUserName}
      />
      <input
        className={'input'}
        type="text"
        placeholder={'Баллы'}
        value={userPoints}
        onChange={onChangeUserPoints}
      />
      <input
        className={'input'}
        type="text"
        placeholder={'Сообщение'}
        value={userMessage}
        onChange={onChangeUserMessage}
      />
      <select value={publicationType} onChange={onChangePublicationType} className={'select'}>
        <option value={'public'}>Публично</option>
        <option value={'anonym'}>Анонимно</option>
      </select>
      <button onClick={onSendData}>Отправить спасибо</button>
    </div>
  );
};

export default Form;