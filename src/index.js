import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import './index.css';

import NavBar from './pageNavigator/navBar.js';
import Ants from './projects/Ants/Ants.js';

import Home from './sitePages/Home';
import Projects from './sitePages/Projects';
import About from './sitePages/About';
import Contact from './sitePages/Contact';
import Footer from './sitePages/Footer';

import registerServiceWorker from './sitePages/registerServiceWorker';

ReactDOM.render((

  <BrowserRouter>

    <Switch>
      <Route path="/home" render = {() => (
        <div>

          <NavBar/>
          <Home/>
          <Footer/>
        </div>
      )}/>
      <Route path="/projects" render = {() => (
        <div>
          <NavBar/>
          <Ants/>
          <Footer/>
        </div>
      )}/>
      <Route path="/about" render = {() => (
        <div>
          <NavBar/>
          <Footer/>
        </div>
      )}/>
      <Route path="/contact" render = {() => (
        <div>
          <NavBar/>
          <Footer/>
        </div>
      )}/>
    </Switch>
  </BrowserRouter>
  ), document.getElementById('root')
);
registerServiceWorker();
