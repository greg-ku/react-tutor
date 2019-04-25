import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';

const DateIcon = (props) => {
  return <span style={{ fontSize: '20px' }}><FontAwesomeIcon icon={faCommentDots}/></span>;
};

export default DateIcon;
