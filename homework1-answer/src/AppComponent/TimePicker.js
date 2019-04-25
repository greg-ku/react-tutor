import React, { Component } from 'react';
import ReactTimePicker from 'react-time-picker';

class TimePicker extends Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
  }

  onActive = () => {
    this.setState({ isActive: true });
  }

  onInactive = () => {
    this.setState({ isActive: false });
  }

  render() {
    return (
      <ReactTimePicker
        disableClock={true}
        clearIcon={null}
        className={this.state.isActive ? 'time-picker-focused' : ''}
        {...this.props}
        onClockOpen={this.onActive}
        onClockClose={this.onInactive}
      />
    );
  }
}

export default TimePicker;
