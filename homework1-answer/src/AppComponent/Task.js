import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';

import CheckBox from './CheckBox';
import Input from './Input';
import Star from './Star';
import Edit from './Edit';
import DateIcon from './DateIcon';
import CommentIcon from './CommentIcon';
import FieldName from './FieldName';
import TimePicker from './TimePicker';
import Button from './Button';

class Task extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="task">
        <div className="task-title flex">
          <CheckBox/>
          <div className="flex-grow flex-nowrap">
            <Input/>
          </div>
          <Star/>
          <Edit/>
        </div>

        <div className="br"></div>

        <div className="task-content">
          <div className="table">
            <div className="table-row">
              <div className="table-cell"><DateIcon/></div>
              <div className="table-cell"><FieldName>Deadline</FieldName></div>
            </div>
            <div className="table-row">
              <div className="table-cell"></div>
              <div className="table-cell">
                <DatePicker
                  dateFormat="yyyy/MM/dd"
                  placeholderText="yyyy/mm/dd"
                />
                <TimePicker
                  format="HH:mm"
                />
              </div>
            </div>
          </div>

          <div className="table">
            <div className="table-row">
              <div className="table-cell"><CommentIcon/></div>
              <div className="table-cell"><FieldName>Comment</FieldName></div>
            </div>
            <div className="table-row">
              <div className="table-cell"></div>
              <div className="table-cell">
                <textarea
                  className="textarea"
                  placeholder="Type your memo here..."
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Button>
            <FontAwesomeIcon icon={faTimes}/> Cancel
          </Button>
          <Button primary={true}>
            <FontAwesomeIcon icon={faPlus}/> Add Task
          </Button>
        </div>
      </div>
    );
  }
}

export default Task;
