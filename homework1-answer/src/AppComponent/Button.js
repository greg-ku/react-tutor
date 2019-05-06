import React from 'react';

const Button = (props) => {
  const { primary } = props;
  const className = 'custom-btn' + (primary ? ' primary' : '');
  return (
    <button className={className} onClick={props.onClick}>{props.children}</button>
  );
};

export default Button;
