
export default class FrameCounter {

  constructor(canvas, ctx){

    var frameCounter = {};

  /* Section 1: The create function sets the object attributes using creepSettings */

    var create = () => {
      frameCounter.x = canvas.width * 0.1;
      frameCounter.y = canvas.height * 0.4;
      frameCounter.font = "10px Arial"
      frameCounter.color = 'blue';
      frameCounter.frame = 0;
    }

  /* Section 2: The draw function draws the actual creep on the canvas */

    var draw = () => {

      /* This section creates the creep's body */
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

    init();

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
  }
}
