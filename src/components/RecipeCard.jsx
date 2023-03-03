import React from 'react';
import PropTypes from 'prop-types';

function RecipeCard({ recipe = {}, index }) {
  const {
    strMealThumb = '',
    strDrinkThumb = '',
    strMeal = '',
    strDrink = '' } = recipe;
  return (
    <div
      className="recipe-card"
      data-testid={ `${index}-recipe-card` }
    >
      <img
        src={ strMealThumb || strDrinkThumb }
        alt={ `imagem da receita ${strMeal || strDrink}` }
        data-testid={ `${index}-card-img` }
      />
      <span data-testid={ `${index}-card-name` }>{ strMeal || strDrink }</span>
    </div>
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
