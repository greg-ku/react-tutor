import React from 'react';

import AddButton from './AddButton';
import Task from './Task';

const AppComponent = (props) => {
  return (
    <div>
      <div className="header"></div>
      <div className="row">
        <div className="wrapper">
          <div className="add-task">
            {
              props.isCreating
              ? <Task editing={true} />
              : <AddButton onClick={props.onAddTaskClick} />
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppComponent;
