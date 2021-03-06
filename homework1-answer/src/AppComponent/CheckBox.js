import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

const CheckBox = (props) => {
  return (
    <label className="checkbox">
      <input type="checkbox" className="hide" checked={props.checked} />
      {
        props.checked
        ? <span className="checkbox-checked-wrapper"><FontAwesomeIcon icon={faCheckSquare} onClick={props.onClick}/></span>
        : <span className="checkbox-unchecked" onClick={props.onClick}></span>
      }
    </label>
  );
};

export default CheckBox;
