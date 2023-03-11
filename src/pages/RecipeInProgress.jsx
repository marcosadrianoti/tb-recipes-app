import { useCallback, useContext, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import { fetchDetailsRecipe } from '../services/fetchApi';

function RecipeInProgress() {
  const { detailsRecipe, setDetailsRecipe } = useContext(RecipesContext);
  const { pathname } = useLocation();
  const { id } = useParams();

  const ingredients = detailsRecipe[0] && Object.keys(detailsRecipe[0])
    .filter((element) => element.includes('strIngredient'))
    .filter((element) => detailsRecipe[0][element] !== '');

  const quantities = detailsRecipe[0] && Object.keys(detailsRecipe[0])
    .filter((element) => element.includes('strMeasure'));

  const fetchDetails = useCallback(async () => {
    const typeRecipe = pathname.includes('drinks') ? 'drinks' : 'meals';
    const response = await fetchDetailsRecipe(id, typeRecipe);
    setDetailsRecipe(response);
  }, [id, pathname, setDetailsRecipe]);

  useEffect(() => {
    fetchDetails();
  }, [fetchDetails]);

  return (
    <div>
      {detailsRecipe[0]
        && (
          <div>
            <img
              data-testid="recipe-photo"
              src={ detailsRecipe[0].strMealThumb || detailsRecipe[0].strDrinkThumb }
              alt={
                `Imagem da receita ${detailsRecipe[0]?.strMeal}`
              || `Imagem da receita ${detailsRecipe[0]?.strDrink}`
              }
              style={ { width: '200px' } }
            />

            <h3 data-testid="recipe-title">
              {detailsRecipe[0]?.strMeal || detailsRecipe[0]?.strDrink}
            </h3>

            <p data-testid="recipe-category">{detailsRecipe[0]?.strCategory}</p>

            {
              Object.keys(detailsRecipe[0])[0] === 'idDrink'
                ? (<p>{detailsRecipe[0]?.strAlcoholic}</p>)
                : null
            }

            <div data-testid="instructions">
              <h3>Lista de ingredientes</h3>
              <ul style={ { listStyleType: 'none' } }>
                {ingredients
                  .filter((ingredient) => detailsRecipe[0][ingredient] !== null)
                  .map((ingredient, index) => (
                    <li key={ index }>
                      <label
                        htmlFor="ingredient"
                        data-testid={ `${index}-ingredient-step` }
                      >
                        <input type="checkbox" id="ingredient" />
                        {` ${detailsRecipe[0][ingredient]}
                        - ${detailsRecipe[0][quantities[index]]}`}
                      </label>
                    </li>
                  ))}
              </ul>

              <h3>Instruções de preparo</h3>
              <p>{detailsRecipe[0]?.strInstructions}</p>
            </div>

            <button
              type="button"
              data-testid="share-btn"
            >
              Compartilhar
            </button>

            <button
              type="button"
              data-testid="favorite-btn"
            >
              Favoritar
            </button>

            <button
              type="button"
              data-testid="finish-recipe-btn"
            >
              Finalizar
            </button>
          </div>
        )}
    </div>
  );
}

export default RecipeInProgress;
