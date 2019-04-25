import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddButton = (props) => {
  return (
    <button className="add-btn" onClick={props.onClick}>
      <FontAwesomeIcon icon={faPlus}/> Add Task
    </button>
  );
};

export default AddButton;
