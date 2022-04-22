import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SinglePage from './SinglePage';
import List from './List';
import Nav from './Nav';
import Top from './Top';
import './cute.css';
import { Link } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
        <Top />
        <div className="container">
          <Nav />
        </div>
        <div>
          <div className="container">
            <div className="row">
              <Route path="/" component={List} exact />
              <Route path="/article" component={List} exact />
              <Route path="/article/:name" component={SinglePage} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));
