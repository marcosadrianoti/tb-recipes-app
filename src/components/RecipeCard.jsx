import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function RecipeCard({ recipe = {}, index }) {
  const {
    strMealThumb = '',
    strDrinkThumb = '',
    strMeal = '',
    strDrink = '' } = recipe;
  return (
    <Link to={ recipe.idMeal ? `/meals/${recipe.idMeal}` : `/drinks/${recipe.idDrink}` }>
      {console.log(recipe)}
      <div
        className="recipe-card"
        data-testid={ `${index}-recipe-card` }
      >
        <img
          src={ strMealThumb || strDrinkThumb }
          alt={ `imagem da receita ${strMeal || strDrink}` }
          data-testid={ `${index}-card-img` }
          className="recipe-image"
        />
        <span
          data-testid={ `${index}-card-name` }
          className="recipe-name"
        >
          { strMeal || strDrink }
        </span>
      </div>
    </Link>
  );
}

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    strMealThumb: PropTypes.string,
    strDrinkThumb: PropTypes.string,
    strMeal: PropTypes.string,
    strDrink: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default RecipeCard;
