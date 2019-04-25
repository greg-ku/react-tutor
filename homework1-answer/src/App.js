import React, { Component } from 'react';
import AppComponent from './AppComponent';

import "react-datepicker/dist/react-datepicker.css";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isCreating: false,
    };
  }

  onAddTaskClick = () => {
    this.setState({ isCreating: !this.state.isCreating });
  }

  render() {
    return (
      <AppComponent
        {...this.state}
        onAddTaskClick={this.onAddTaskClick}
      />
    );
  }
}

export default App;
