import React from "react";
import './Button.css';

const Button = (props) => {
  return (
    <button {...props} className={`${props.className ? props.className : ''} button`} />
  );
};

export default Button;