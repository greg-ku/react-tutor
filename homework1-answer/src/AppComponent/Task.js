import React, { Component, Fragment } from 'react';
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

    this.state = {
      editing: props.isCreation || props.isEditing,
      tempTodo: props.todo || {},
    };
  }

  static defaultProps = {
    isEditing: false,
    todo: {},
    isCreation: false,
  }

  static getDerivedStateFromProps(props, state) {
    if (props.isEditing !== state.prevEditing) {
      return {
        editing: props.isEditing,
        prevEditing: state.editing,
      };
    }
    return null;
  }

  onEditClick = () => {
    if (!this.state.editing) {
      this.setState({
        editing: !this.state.editing,
        tempTodo: this.props.todo || {},
      });
      if (typeof this.props.onEditClick === 'function') {
        this.props.onEditClick();
      }
    }
  }

  onCheckedToggle = () => {
    if (this.state.editing) {
      this.setState({
        tempTodo: { ...this.state.tempTodo, checked: !this.state.tempTodo.checked },
      });
    } else {
      this.props.onChange({ ...this.props.todo, checked: !this.props.todo.checked });
    }
  }

  onStarToggle = () => {
    if (this.state.editing) {
      this.setState({
        tempTodo: { ...this.state.tempTodo, isImportant: !this.state.tempTodo.isImportant },
      });
    } else {
      this.props.onChange({ ...this.props.todo, isImportant: !this.props.todo.isImportant });
    }
  }

  onTitleChnage = e => {
    if (this.state.editing) {
      this.setState({
        tempTodo: { ...this.state.tempTodo, title: e.target.value },
      });
    } else {
      this.props.onChange({ ...this.props.todo, title: e.target.value });
    }
  }

  onCommentChange = e => {
    this.setState({
      tempTodo: { ...this.state.tempTodo, comment: e.target.value },
    });
  }

  onDeadlineDateChange = date => {
    this.setState({
      tempTodo: { ...this.state.tempTodo, deadline: date },
    });
  }

  onDeadlineTimeChange = time => {
    const deadline = this.state.tempTodo.deadline ? new Date(this.state.tempTodo.deadline) : new Date();
    deadline.setHours(time.split(':')[0]);
    deadline.setMinutes(time.split(':')[1]);
    this.setState({
      tempTodo: { ...this.state.tempTodo, deadline },
    });
  }

  onConfirmClick = () => {
    if (!this.state.tempTodo.title) return;
    this.props.onConfirm(this.state.tempTodo);
    this.setState({ editing: false });
  }

  onCancelClick = () => {
    this.setState({ editing: false });
    if (typeof this.props.onCancel === 'function') {
      this.props.onCancel();
    }
  }

  render() {
    const todo = this.state.editing ? this.state.tempTodo : this.props.todo;
    return (
      <div className="task">
        <div className={todo.isImportant ? 'task-title flex important' : 'task-title flex'}>
          <CheckBox checked={todo.checked} onClick={this.onCheckedToggle}/>
          <div className={todo.checked && todo.title ? 'flex-grow flex-nowrap line-through' : 'flex-grow flex-nowrap'}>
            <Input value={todo.title} onChange={this.onTitleChnage}/>
          </div>
          <Star checked={todo.isImportant} onClick={this.onStarToggle}/>
          <Edit checked={this.state.editing} onClick={this.onEditClick}/>
        </div>

        {
          this.state.editing &&
          <Fragment>
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
                      selected={todo.deadline}
                      onChange={this.onDeadlineDateChange}
                    />
                    <TimePicker
                      format="HH:mm"
                      value={todo.deadline}
                      onChange={this.onDeadlineTimeChange}
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
                      value={todo.comment}
                      onChange={this.onCommentChange}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Button onClick={this.onCancelClick}>
                <FontAwesomeIcon icon={faTimes}/> Cancel
              </Button>
              <Button primary={true} onClick={this.onConfirmClick}>
                <FontAwesomeIcon icon={faPlus}/> { this.props.isCreation ? 'Add Task' : 'Save' }
              </Button>
            </div>
          </Fragment>
        }
      </div>
    );
  }
}

export default Task;
