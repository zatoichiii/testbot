import React from "react";
import './Main.css';
import { Link } from 'react-router-dom';

const Main = () => {
  
    return (
      <div>
        Main
        <Link to="/form">
          <button>Перейти к форме</button>
        </Link>
      </div>
    );
  };
  
  export default Main;