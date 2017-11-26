import BasicFoodNode from "../Assets/Environment/BasicFoodNode.js";
import basicFoodNode from "../Assets/Environment/FoodSettings.js";


/*

Name: worldSeed.js
Dependencies: gameEngine.js
Description:
This initializes our world objects and loads them into an array for use by gameEngine.

*/

const WorldSeed = (ctx) =>{
  var b = new BasicFoodNode(basicFoodNode, ctx);
  return [b];
}

export default WorldSeed;
