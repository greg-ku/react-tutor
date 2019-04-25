import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';

const DateIcon = (props) => {
  return <span style={{ fontSize: '20px' }}><FontAwesomeIcon icon={faCalendarAlt}/></span>;
};

export default DateIcon;
