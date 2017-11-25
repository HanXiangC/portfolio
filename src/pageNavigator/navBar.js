import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import './navBar.css';

class NavBar extends Component {

  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {

    const linkToHome = () => {
      window.location = "/home"
    }
    const linkToProjects = () => {
      window.location = "/projects"
    }
    const linkToAbout = () => {
      window.location = "/about"
    }
    const linkToContacts = () => {
      window.location = "/contact"
    }

    return(
      <div className = "mainNavBar">
        <div className = "navButton" onClick = {linkToHome}>Home</div>
        <div className = "navButton" onClick = {linkToProjects}>Projects</div>
        <div className = "navButton" onClick = {linkToAbout}>About Me</div>
        <div className = "navButton" onClick = {linkToContacts}>Contacts</div>
      </div>
    );
  }
}

export default NavBar;
