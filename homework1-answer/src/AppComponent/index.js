import React from 'react';

import AddButton from './AddButton';
import Task from './Task';

const AppComponent = (props) => {
  return (
    <div>
      <div className="header"></div>
      <div className="body">
        <div className="row">
          <div className="wrapper">
            <div className="add-task">
              {
                props.isCreating
                ? <Task
                    isCreation={true}
                    isEditing={true}
                    onCancel={props.onCreationCancel}
                    onConfirm={props.onCreationConfirm}
                    onChange={props.onTodoEdit}
                  />
                : <AddButton onClick={props.onAddTaskClick} />
              }
            </div>

            {
              props.todos.map((todo, index) => <Task
                index={index}
                isEditing={todo.isEditing}
                onConfirm={props.onTodoEdit.bind(this, index)}
                onChange={props.onTodoEdit.bind(this, index)}
                onEditClick={props.onEditButtonClick.bind(this, index)}
                todo={todo.entity}
              />)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppComponent;
