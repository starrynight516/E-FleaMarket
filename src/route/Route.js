import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect,browserHistory } from 'react-router-dom';
// import axios from 'axios';

import Header from '../components/header/Header.jsx';

export default class RouteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    }
  }
  render(){
    const { cart } = this.state;
    return(
      <Router>
        <div id="body">
          <Route children={({location})=>{
            return(
              <Header location={location} cart={cart}/>
            )
          }}/>
        </div>
      </Router>
    );
  }
}