import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import StatusBar from './StatusBar';
import SearchBar from './SearchBar';

export default class ToolBar extends Component {
  render() {
    return (
      <div
        id='header-tool-wrap'
        ref='headerTool'
      >
        <Menu
          secondary
          className='header-tool'
        >
          <StatusBar />
          <SearchBar />
        </Menu>
      </div>
    )
  }
}