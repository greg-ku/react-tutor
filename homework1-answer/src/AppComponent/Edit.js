import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

const Edit = (props) => {
  return (
    <span className={props.checked ? 'ic-pen checked' : 'ic-pen'}>
      <FontAwesomeIcon icon={faPen} onClick={props.onClick} />
    </span>
  );
};

export default Edit;
