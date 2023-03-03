import React from 'react';
import PropTypes from 'prop-types';
import RecipeCard from '../components/RecipeCard';

function Recipes({ recipes = [] }) {
  return (
    <div className="recipes-container">
      <div className="recipes">
        {recipes.map((recipe, index) => (
          <RecipeCard
            key={ recipe.idMeal || recipe.idDrink }
            recipe={ recipe }
            index={ index }
          />
        ))}
      </div>
    </div>
  );
}

Recipes.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape({
    idMeal: PropTypes.string,
    idDrink: PropTypes.string,
    strMeal: PropTypes.string,
    strDrink: PropTypes.string,
  }).isRequired),
};

export default Recipes;
