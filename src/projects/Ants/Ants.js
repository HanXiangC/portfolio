import CanvasBody from './interfaceScreen/canvasBody.js';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/*

Name: Ants.js
Dependencies: App.js
Description:
This is the base level framework for the game interface. It sets up the canvas board element
which initializes the game engine.

*/

class Ants extends Component {

  render() {
    return (
      <div>
        <CanvasBody/>
      </div>
    );
  }
}

export default Ants;
