import FrameCounter from "./frameCounter.js";


/*

Name: utilitiesController.js
Dependencies: gameEngine.js
Description:
This initializes our utility objects and loads them into an array for use by gameEngine.

*/

const UtilitiesInit = (canvas, ctx) =>{
  var counter = new FrameCounter(canvas, ctx);
  return [counter];
}

export default UtilitiesInit;
