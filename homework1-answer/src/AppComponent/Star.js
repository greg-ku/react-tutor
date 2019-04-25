import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const Star = (props) => {
  return (
    <span className={props.checked ? 'ic-star checked' : 'ic-star'}>
      <FontAwesomeIcon icon={props.checked ? faStar : farStar} onClick={props.onClick} />
    </span>
  );
};

export default Star;
