import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Content from './content'
import themes from './themes'

class App extends Component {
  state = {
    value: 0
  }

  handleChange = (event, value) => {
    this.setState({ value })
  } 

  render() {
    const { value } = this.state
    return (
      <MuiThemeProvider theme={themes[value]}>
        <Tabs fullWidth value={value} onChange={this.handleChange}>
          <Tab label="Pastel" />
          <Tab label="Dark" />
          <Tab label="Light" />
        </Tabs>
        <Content theme={themes[value]}/>
      </MuiThemeProvider>
    );
  }
}

export default App;
