import React from 'react';
import { Route } from 'react-router-dom';

import ToolBar from './ToolBar';
import Nav from '../nav/Nav'

import '../../assets/style/header.scss';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <ToolBar />
        <Route component={Nav}/>
      </header>
    );
  }
}