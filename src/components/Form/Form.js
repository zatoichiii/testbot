import React, { useEffect, useState } from "react";
import './Form.css';
import { useTelegram } from "../../hooks/useTelegram";

const Form = () => {
  const [name, setName] = useState('');
  const [points, setPoints] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');

  const {tg} = useTelegram();

  useEffect(() => {
    tg.MainButton.setParams({ text: 'Отправить спасибо' });
  }, []);


  useEffect( () => {
    if(!points || !message || !name) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.show();
    }
  }, [points, message, name])


  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePointsChange = (e) => {
    setPoints(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  return (
    <div className="form">
      <h3>Кому вы хотите дать свои спасибо?</h3>
      <input
        className="input"
        type="text"
        placeholder="Имя"
        value={name}
        onChange={handleNameChange}
      />
      <input
        className="input"
        type="text"
        placeholder="Баллы"
        value={points}
        onChange={handlePointsChange}
      />
      <input
        className="input"
        type="text"
        placeholder="Сообщение"
        value={message}
        onChange={handleMessageChange}
      />

      <select
        value={subject}
        className="select"
        onChange={handleSubjectChange}
      >
        <option value="public">Публично</option>
        <option value="anonim">Анонимно</option>
      </select>
    </div>
  );
};

export default Form;