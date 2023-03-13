import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { fetchDetailsRecipe } from '../services/fetchApi';
import RecipesContext from '../context/RecipesContext';
import RecomendedRecipes from '../components/RecomendedRecipes';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

const copy = require('clipboard-copy');

function RecipeDetails() {
  const { setDetailsRecipe, detailsRecipe } = useContext(RecipesContext);
  const [arrayIngredients, setArrayIngredients] = useState([]);
  const [arrayMeasures, setArrayMeasures] = useState([]);
  const [isDoneRecipe, setIsDoneRecipe] = useState(false);
  const [isInProgressRecipes, setIsInProgressRecipes] = useState(false);
  const [isCopiedLink, setIsCopiedLink] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

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
      if (objInProgressRecipes[typeRecipe] !== undefined) {
        const isInProgress = Object.keys(objInProgressRecipes[typeRecipe]).includes(id);
        setIsInProgressRecipes(isInProgress);
      }
    }
  }, [id, pathname]);

  const copyLink = useCallback(() => {
    const link = `http://localhost:3000${pathname}`;
    copy(link);
    setIsCopiedLink(true);
  }, [pathname]);

  const setFavoriteInLocalStorage = useCallback(async () => {
    const typeRecipe = pathname.includes('drinks') ? 'drinks' : 'meals';
    const normalizedTypeRecipe = typeRecipe.replace(/^\w/, (c) => c.toUpperCase()).replace('s', '');
    const newFavoriteRecipe = {
      id,
      type: typeRecipe.replace('s', ''),
      nationality: detailsRecipe[0].strArea || '',
      category: detailsRecipe[0].strCategory || '',
      alcoholicOrNot: detailsRecipe[0].strAlcoholic || '',
      name: detailsRecipe[0][`str${normalizedTypeRecipe}`],
      image: detailsRecipe[0][`str${normalizedTypeRecipe}Thumb`],
    };
    if (localStorage.getItem('favoriteRecipes') !== null) {
      const ListInProgressRecipes = await JSON.parse(
        localStorage.getItem('favoriteRecipes'),
      );
      ListInProgressRecipes.push(newFavoriteRecipe);
      localStorage.setItem('favoriteRecipes', JSON.stringify(ListInProgressRecipes));
    } else {
      localStorage.setItem('favoriteRecipes', JSON.stringify([newFavoriteRecipe]));
    }
    setIsFavorite(!isFavorite);
  }, [detailsRecipe, pathname, id, isFavorite]);

  const isFavoriteRecipe = useCallback(() => {
    const getfavoriteRecipes = localStorage.getItem('favoriteRecipes');
    if (getfavoriteRecipes) {
      const arrFavoriteRecipes = JSON.parse(getfavoriteRecipes);
      if (arrFavoriteRecipes.length !== 0) {
        const recipeFound = !!arrFavoriteRecipes.find((recipe) => recipe.id === id);
        setIsFavorite(recipeFound);
      }
    }
  }, [id]);

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
    isFavoriteRecipe();
  }, [fetchDetails, progressRecipes, doneRecipe, isFavoriteRecipe]);

  return (
    <div>
      {
        isCopiedLink && (
          <h2>Link copied!</h2>
        )
      }
      <button
        data-testid="share-btn"
        type="button"
        className="sucess"
        onClick={ () => copyLink() }
      >
        <img
          src={ shareIcon }
          alt="Share-icon"
        />
      </button>

      <button
        type="button"
        className="sucess"
        onClick={ () => setFavoriteInLocalStorage() }
      >
        <img
          data-testid="favorite-btn"
          src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
          alt="Favorite-Icon"
        />
      </button>

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
