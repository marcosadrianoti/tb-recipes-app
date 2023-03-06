import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import RecipesContext from '../context/RecipesContext';

function RecipeCard({ recipe = {}, index }) {
  const { fetchDetails } = useContext(RecipesContext);
  const history = useHistory();

  const {
    idMeal,
    idDrink,
    strMealThumb = '',
    strDrinkThumb = '',
    strMeal = '',
    strDrink = '' } = recipe;

  const goDetailsRecipe = async () => {
    await fetchDetails(recipe);

    if (idMeal) history.push(`/meals/${idMeal}`);
    if (idDrink) history.push(`/drinks/${idDrink}`);
  };

  return (
    <button
      onClick={ () => goDetailsRecipe() }
      className="recipe-card"
      data-testid={ `${index}-recipe-card` }
    >
      <img
        src={ strMealThumb || strDrinkThumb }
        alt={ `imagem da receita ${strMeal || strDrink}` }
        data-testid={ `${index}-card-img` }
      />
      <span data-testid={ `${index}-card-name` }>{ strMeal || strDrink }</span>
    </button>
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
