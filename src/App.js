import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.scss';
import './reset.css';

import Home from './Home';
import SubPage from './SubPage';
import ArtEscape from './ProjectPages/ArtEscape';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/design">
            <SubPage page="design" />
          </Route>
          <Route path="/code">
            <SubPage page="code" />
          </Route>
          <Route path="/other">
            <SubPage page="other" />
          </Route>
          <Route path="/projects/art-escape">
            <ArtEscape />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

