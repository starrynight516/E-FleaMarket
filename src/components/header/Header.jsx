import React from 'react';
// import { Route } from 'react-router-dom';

import ToolBar from './ToolBar';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <ToolBar />
      </header>
    );
  }
}