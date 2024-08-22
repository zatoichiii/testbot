import React from "react";
import './Main.css';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className="container">
      <div className="grid-container">
        <div className="left-column">
          <div className="button">
            <div className="button-text">Ваши баллы: 30</div>
          </div>
          <Link className="button" to="/">
            <div className="button-text">FAQ</div>
          </Link>
        </div>
        <div className="right-column">
          <Link className="big-button" to="/form">
            <div className="button-text">Поделиться спасибо</div>
          </Link>
        </div>
      </div>
      <Link className="full-width-button" to="https://docs.google.com/forms/d/e/1FAIpQLSdCWNaeQ6CGuWaJ_-MKnQrk7qP9IZ303y3yi8hAtfGFx4wTuA/viewform" target="_blank">
        <div className="button-text">Отчет об удаленной работе</div>
      </Link>
    </div>
  );
};

export default Main;