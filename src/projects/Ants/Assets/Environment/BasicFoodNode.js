/*

Name: BasicFoodNode.js
Dependencies: worldSeed.js
Description:
This is the basic food resource node, containing all of its properties and functions.

*/

export default class BasicFoodNode {

  constructor(settings, context){

    var nodeElement = {};

  /* Section 1: The create function sets the object attributes using creepSettings */

    function create(){
      nodeElement.x = settings.x;
      nodeElement.y = settings.y;
      nodeElement.size = settings.size;
      nodeElement.color = settings.color;
    }

  /* Section 2: The draw function draws the actual creep on the canvas */

    function draw(){

      /* This section creates the creep's body */
      context.beginPath();
      context.arc(nodeElement.x , nodeElement.y, nodeElement.size, 0, Math.PI*2);
      context.fillStyle = nodeElement.color;
      context.fill();
      context.closePath();

    }

    this.render = function(){
      this.x = nodeElement.x;
      this.y = nodeElement.y;
      this.size = nodeElement.size;
      this.color = nodeElement.color;
      create();
      draw();
    }
  }
}
