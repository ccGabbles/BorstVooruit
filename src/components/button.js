
import React from 'react';
import './Button.css';

const STYLES = ['btn--primary'];


export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];



  return (
    <a to='#' className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </a>
  );
};