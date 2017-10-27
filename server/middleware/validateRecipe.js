import validator from 'validator';

export default class ValidateRecipes {

  static addRecipeValidator(req, res, next) {
    const { title, ingredients, directions } = req.body,
      errors = {};
    if (title === undefined || ingredients === undefined || directions === undefined) {
      return res.status(400)
        .json({
          status: 'Fail',
          message: 'All or some fields are undefined'
        });
    }
    if ((validator.isEmpty(title))) {
      errors.title = 'Title is required';
    }
    if (!(validator.isEmpty(ingredients))) {
      if (!(validator.isLength(ingredients, { min: 30, max: 3000 }))) {
        errors.ingredients = 'Ingredients field should be above 30 characters';
      }
    } else {
      errors.ingredients = 'Ingredients field should not be empty';
    }

    if (!(validator.isEmpty(directions))) {
      if (!(validator.isLength(directions, { min: 30, max: 3000 }))) {
        errors.directions = 'Direction field should be above 30 character';
      }
    } else {
      errors.directions = 'Directions field should not be empty'
    }


    if (!(Object.keys(errors).length === 0)) {
      return res.status(400)
        .json(errors);
    }
    return next();


  }
}
