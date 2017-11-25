import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GameEngine from '../engine/gameEngine.js';
import './canvas.css';

/*

Name: canvasBody.js
Dependencies: App.js
Description:
This is the base level framework for the game interface. It sets up the canvas board element, with appropriate
full screen size, and initializes the game engine.

*/

class CanvasBody extends Component {

  render() {

    /* Prepares Canvas sizes */
    const setCanvasDimensions = () => {
      const canvasW = window.innerWidth;
      const canvasH = (canvasW/16) * 7;
      return [canvasW, canvasH];
    }
    /* ------ */

    return (

      <div className="gameBlock">
        <canvas id = "myGameBoard" width = {setCanvasDimensions()[0]} height = {setCanvasDimensions()[1]}></canvas>
        <GameEngine/>
      </div>
    );
  }
}

export default CanvasBody;
