import recipesDatabase from '../models/more-recipes';
/**
 * Class implementation for /api/recipes routes
 * @class RecipesApiController
 */
export default class recipesController {
  /**
      * Add recipe to recipes model
      * @param {obj} req
      * @param {obj} res
      * @returns {obj} insertion success messages
      */
  static createRecipe(req, res) {
    const { title, ingredients, directions } = req.body;
    let newRecipeID = recipesDatabase[recipesDatabase.length - 1].id + 1;

    recipesDatabase.push({
      id: newRecipeID,
      title,
      ingredients,
      directions,
      upvote: 0,
      downvote: 0
    });

    res.status(200)
      .json({
        status: 'Success',
        message: 'Recipe added successfully',
        recipesDatabase
      });
  }
  /**
       * Updates a particular recipe in the recipes model
       * @param {obj} req
       * @param {obj} res
       * @returns {obj} insertion error messages or success messages
       */
  static updateRecipe(req, res) {
    const { title, ingredients, description } = req.body;
    for (let i = 0; i < recipes.length; i += 1) {
      if (recipes[i].id === parseInt(req.params.id, 10)) {
        if (title || ingredients || description) {
          recipesDatabase[i].title = (title) || recipesDatabase[i].title;
          recipesDatabase[i].ingredients = (ingredients) || recipesDatabase[i].ingredients;
          recipesDatabase[i].description = (description) || recipesDatabase[i].description;
          res.status(200);
          res.json({
            status: 'Success',
            message: 'Recipe updated successfully',
            recipes
          });
        } else {
          res.status(400);
          res.json({
            status: 'Failed',
            message: 'Indicate recipe to update'
          });
        }
      }
    }
    res.status(400);
    res.json({
      status: 'Failed',
      message: 'Recipe ID parameter does not exist'
    });
  }
  /**
     * Deletes a particular recipe from the recipes model
     * @param {obj} req
     * @param {obj} res
     * @returns {obj} insertion error messages or success messages
     */
  static deleteRecipe(req, res) {
    if (parseInt(req.params.id, 10) in recipesDatabase.map(recipe => recipe.id)) {
      const newRecipeCatalog = recipesDatabase.filter(recipe => recipe.id !== parseInt(req.params.id, 10));
      res.status(200);
      res.json({
        status: 'Success',
        message: 'Successfully deleted recipe',
        newRecipeCatalog
      });
    } else {
      res.status(400);
      res.json({
        status: 'Failed',
        message: 'Recipe ID does not exist'
      });
    }
  }


  static listRecipes(req, res) {
    res.status(200);
    res.json({ recipesDatabase });
  }
}
