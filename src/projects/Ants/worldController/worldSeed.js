import BasicFoodNode from "../Assets/Environment/BasicFoodNode.js";
import basicFoodNode from "../Assets/Environment/FoodSettings.js";

const WorldSeed = (ctx) =>{
  var b = new BasicFoodNode(basicFoodNode, ctx);
  return [b];
}

export default WorldSeed;
