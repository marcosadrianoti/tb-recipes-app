import { useCallback, useContext, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import { fetchDetailsRecipe } from '../services/fetchApi';
import '../App.css';

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

  const startTheCheckboxes = useCallback(() => {
    const allCheckbox = document.querySelectorAll('input');
    const typeRecipe = pathname.includes('drinks') ? 'drinks' : 'meals';
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    console.log(allCheckbox);

    allCheckbox.forEach((checkbox) => {
      if (inProgressRecipes[typeRecipe][id]
        && inProgressRecipes[typeRecipe][id].includes(checkbox.name)) {
        checkbox.checked = true;
      }
    });
  }, [id, pathname]);

  startTheCheckboxes();

  const checkLocalStorage = useCallback(() => {
    if (!localStorage.getItem('inProgressRecipes')) {
      localStorage
        .setItem('inProgressRecipes', JSON.stringify({ drinks: {}, meals: {} }));
    }
  }, []);

  useEffect(() => {
    fetchDetails();
    checkLocalStorage();
  }, [fetchDetails, checkLocalStorage]);

  const handleCheck = ({ target: { checked, name } }) => {
    const labelText = document.getElementById(`${name}`);
    if (checked) {
      labelText.className = 'ingredient-item';

      const typeRecipe = pathname.includes('drinks') ? 'drinks' : 'meals';
      const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));

      if (!inProgressRecipes[typeRecipe][id]) {
        inProgressRecipes[typeRecipe][id] = [];
      }
      inProgressRecipes[typeRecipe][id].push(name);

      localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
    } else {
      labelText.className = '';

      const typeRecipe = pathname.includes('drinks') ? 'drinks' : 'meals';
      const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));

      const doneRecipes = inProgressRecipes[typeRecipe][id]
        .filter((element) => element !== name);

      inProgressRecipes[typeRecipe][id] = doneRecipes;

      if (inProgressRecipes[typeRecipe][id].length === 0) {
        delete inProgressRecipes[typeRecipe][id];
      }

      localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
    }
  };

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
              <ul className="ingredients-list">
                {ingredients
                  .filter((ingredient) => detailsRecipe[0][ingredient] !== null)
                  .map((ingredient, index) => (
                    <li key={ index }>
                      <label
                        htmlFor={ `ingredient${index}` }
                        id={ index }
                        className=""
                        data-testid={ `${index}-ingredient-step` }
                      >
                        <input
                          type="checkbox"
                          id={ `ingredient${index}` }
                          name={ index }
                          onChange={ handleCheck }
                        />
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
