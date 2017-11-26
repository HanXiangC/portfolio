
/*

Name: frameCounter.js
Dependencies: utilitiesController.js
Description:
This is the basic frame counter object.

*/

export default class FrameCounter {

  constructor(canvas, ctx){

    var frameCounter = {};

    var create = () => {
      frameCounter.x = canvas.width * 0.1;
      frameCounter.y = canvas.height * 0.4;
      frameCounter.font = "10px Arial"
      frameCounter.color = 'blue';
      frameCounter.frame = 0;
    }

    var draw = () => {

      ctx.beginPath();
      ctx.font = frameCounter.font;
      ctx.fillText(frameCounter.frame, frameCounter.x, frameCounter.y);
      ctx.fillStyle = frameCounter.color;
      ctx.closePath();

    }

    var init = () => {
      create();
      draw();
    }

    var update = (a) => {
      frameCounter.frame = a;
      ctx.beginPath();
      ctx.font = frameCounter.font;
      ctx.fillText(frameCounter.frame, frameCounter.x, frameCounter.y);
      ctx.fillStyle = frameCounter.color;
      ctx.closePath();
    }

    this.render = function(a){
      update(a);
      console.log(frameCounter.frame);
    }

    init();
    
  }
}
