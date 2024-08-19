import React from "react";

const Button = (props) => {
  return (
    <button {...props} className={`${props.className ? props.className : ''} button`} />
  );
};

export default Button;