import React, { Component } from 'react';

import WorldSeed from "../worldController/worldSeed.js";

import UtilitiesInit from "../interfaceUtilities/utilitiesController.js";
/*

Name: gameEngine.js
Dependencies: projects/Ants/interfaceScreen/canvasBody.js
Description:
This is a gameEngine component which creates a consistently updating loop through the renderGame function,
which is kicked off by returning engineStart.

*/

class GameEngine extends Component {

  render() {

    /* Useful Global Vars */
    var assets = [];

    var frame = 0;
    var gameRunning = true;
    var a = 0;
    /* ------ */

    /* Game Render used by loop */
    var renderGame = () => {
      var canvas = document.getElementById("myGameBoard");

      if(canvas != null){
        a += 1;

        var ctx = canvas.getContext("2d");
        var foodAssets = WorldSeed(ctx);
        var utilities = UtilitiesInit(canvas, ctx);

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        //console.log(ctx);

        for(var i=0; i < utilities.length; i++){
            console.log(utilities);
            utilities[i].render(a);
        }


        for(var i=0; i < foodAssets.length; i++){
            console.log(foodAssets);
            foodAssets[i].render();
        }
      }
    }



    /* ------ */

    /* Game Engine loop */
    var engineStart = () => {
      window.requestAnimFrame = (function(){
        return  window.requestAnimationFrame       ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame    ||
                function( callback ){
                  window.setTimeout(callback, 1000 / 60);
                };
              })();
              (function animloop(){
                window.requestAnimFrame(animloop);
                renderGame();
              })();
    }
    /* ------ */

    /* Initial Calls */
    return (
      <div>
        {engineStart()}
      </div>
    );
    /* ------ */

  }
}

export default GameEngine;
