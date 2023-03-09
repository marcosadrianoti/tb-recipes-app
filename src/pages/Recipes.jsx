import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import RecipeCard from '../components/RecipeCard';
import RecipesContext from '../context/RecipesContext';

function Recipes({ recipes = [] }) {
  const { filterRecipes } = useContext(RecipesContext);
  const RENDER_MAX = 12;

  return (
    <div className="recipes-container">
      <div className="recipes">
        { filterRecipes.length === 0 ? (recipes.map((recipe, index) => (
          index < RENDER_MAX
          && <RecipeCard
            key={ recipe.idMeal || recipe.idDrink }
            recipe={ recipe }
            index={ index }
          />
        ))) : ((filterRecipes.map((recipe, index) => (
          index < RENDER_MAX
          && <RecipeCard
            key={ recipe.idMeal || recipe.idDrink }
            recipe={ recipe }
            index={ index }
          />
        )))) }
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
  })).isRequired,
};

export default Recipes;
