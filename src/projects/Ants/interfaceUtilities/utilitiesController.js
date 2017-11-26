import FrameCounter from "./frameCounter.js";


const UtilitiesInit = (canvas, ctx) =>{
  var counter = new FrameCounter(canvas, ctx);
  return [counter];
}

export default UtilitiesInit;
