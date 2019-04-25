import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = { isFocused: false };
  }

  static defaultProps = {
    value: '',
  }

  onPreviewFocus = () => {
    this.setState({ isFocused: true }, () => this.inputRef.current.focus());
  }

  onInputBlur = () => {
    this.setState({ isFocused: false });
  }

  render () {
    return (
      <div className="custom-input">
        {
          !this.state.isFocused &&
          <div className="preview" onClick={this.onPreviewFocus}>{this.props.value || 'Type Something Here...'}</div>
        }
        <input
          type="text"
          className={this.state.isFocused ? 'input' : 'input hide'}
          placeholder="Type Something Here..."
          value={this.props.value}
          ref={this.inputRef}
          onBlur={this.onInputBlur}
        />
      </div>
    );
  }
}

export default Input;
