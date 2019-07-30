import React, {Component} from 'react';
import './App.css';
import Login from './layout/login';
import Profile from './layout/profile';
import Register from './layout/register';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


class App extends Component{
  render(){
    return (
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/profile" component={Profile} />
      <Route path="/signup" component={Register} />
     </Router>
  );
  }
}

export default App;
