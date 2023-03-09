import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import RecipesContext from '../context/RecipesContext';

function Recipes() {
  const { filterRecipes, meals, drinks } = useContext(RecipesContext);
  const RENDER_MAX = 12;

  const history = useHistory();

  const recipes = history.location.pathname === '/meals' ? meals : drinks;

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

export default Recipes;
