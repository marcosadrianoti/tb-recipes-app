import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { fetchDetailsRecipe } from '../services/fetchApi';
import RecipesContext from '../context/RecipesContext';
import RecomendedRecipes from '../components/RecomendedRecipes';

function RecipeDetails() {
  const { setDetailsRecipe, detailsRecipe } = useContext(RecipesContext);
  const [arrayIngredients, setArrayIngredients] = useState([]);
  const [arrayMeasures, setArrayMeasures] = useState([]);
  const [isDoneRecipe, setIsDoneRecipe] = useState(false);
  const [isInProgressRecipes, setIsInProgressRecipes] = useState(false);

  const history = useHistory();
  const { pathname } = useLocation();
  const { id } = useParams();

  const fetchDetails = useCallback(async () => {
    const typeRecipe = pathname.includes('drinks') ? 'drinks' : 'meals';
    const response = await fetchDetailsRecipe(id, typeRecipe);
    setDetailsRecipe(response);
  }, [id, pathname, setDetailsRecipe]);

  const doneRecipe = useCallback(() => {
    const getDoneRecipes = localStorage.getItem('doneRecipes');
    if (getDoneRecipes) {
      const arrDoneRecipes = JSON.parse(getDoneRecipes);
      arrDoneRecipes.forEach((recipe) => {
        const isDone = recipe.id === id;
        setIsDoneRecipe(isDone);
      });
    }
  }, [id]);

  const progressRecipes = useCallback(() => {
    const typeRecipe = pathname.includes('drinks') ? 'drinks' : 'meals';
    const getInProgressRecipes = localStorage.getItem('inProgressRecipes');
    if (getInProgressRecipes) {
      const objInProgressRecipes = JSON.parse(getInProgressRecipes);
      const isInProgress = Object.keys(objInProgressRecipes[typeRecipe]).includes(id);
      setIsInProgressRecipes(isInProgress);
    }
  }, [id, pathname]);

  useMemo(() => {
    if (detailsRecipe[0]) {
      const arr = Object.keys(detailsRecipe[0]);
      const arrIngredients = arr.filter((key) => key.includes('Ingredient'))
        .map((key) => detailsRecipe[0][key]);
      const arrMeasures = arr.filter((key) => key.includes('Measure'))
        .map((key) => detailsRecipe[0][key]);
      setArrayIngredients(arrIngredients);
      setArrayMeasures(arrMeasures);
    }
  }, [detailsRecipe]);

  useEffect(() => {
    fetchDetails();
    progressRecipes();
    doneRecipe();
  }, [fetchDetails, progressRecipes, doneRecipe]);

  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={ detailsRecipe[0]?.strMealThumb || detailsRecipe[0]?.strDrinkThumb }
        alt="img-recipe"
      />
      <h1 data-testid="recipe-title">
        {detailsRecipe[0]?.strMeal || detailsRecipe[0]?.strDrink}
      </h1>
      <h2 data-testid="recipe-category">
        {detailsRecipe[0]?.strAlcoholic || detailsRecipe[0]?.strCategory}
      </h2>
      <ul>
        {arrayIngredients.map((ingredient, index) => ingredient && (
          <li
            key={ index }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            {`${ingredient} - ${arrayMeasures[index]}`}
          </li>
        ))}
      </ul>
      <p data-testid="instructions">{ detailsRecipe[0]?.strInstructions }</p>
      {pathname.includes('/meals') && (
        <iframe
          data-testid="video"
          width="420"
          height="315"
          title="Video"
          src={ detailsRecipe[0]?.strYoutube.replace('watch?v=', 'embed/')
            .replace('youtube', 'youtube-nocookie') }
        />
      )}
      <RecomendedRecipes />
      { isDoneRecipe || (
        <button
          data-testid="start-recipe-btn"
          type="button"
          className="sucess w-50 button-start-recipe"
          onClick={ () => history.push(`${pathname}/in-progress`) }
        >
          {isInProgressRecipes ? 'Continue Recipe' : 'Start Recipe'}
        </button>)}
    </div>
  );
}

export default RecipeDetails;
