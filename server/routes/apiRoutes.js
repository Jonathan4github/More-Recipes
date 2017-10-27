import express from 'express';
import ValidateRecipes from '../middleware/validateRecipe';
import recipeController from '../controller/more-recipes';

const router = express.Router();


//POST and GET API routes 
router.route('/recipes')
  .post(ValidateRecipes.addRecipeValidator, recipeController.createRecipe)
  .get(recipeController.listRecipes);

router.route('/recipes/:recipeId')
  .put(recipeController.updateRecipe)
  .delete(recipeController.deleteRecipe);
export default router;