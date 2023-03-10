import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import RecipesContext from '../context/RecipesContext';
import '../RecomendedRecipes.css';

const MAX_RECIPES = 6;

function RecomendedRecipes() {
  const { meals, drinks } = useContext(RecipesContext);
  const { pathname } = useLocation();

  const isMealOrDrink = pathname.includes('meals') ? drinks : meals;

  const arr = isMealOrDrink.slice(0, MAX_RECIPES);

  return (
    <div>
      <Carousel className="w-100" slide interval={ null }>
        {arr?.map((recipe, index) => (
          index % 2 === 0 && (
            <Carousel.Item key={ index }>
              <div
                data-testid={ `${index}-recommendation-card` }
                className="d-flex"
              >
                <div className="w-50">
                  <img
                    src={ arr[index].strMealThumb || arr[index].strDrinkThumb }
                    alt={ `imagem da receita ${arr[index]
                      .strMeal || arr[index].strDrink}` }
                    className="d-block w-100"
                  />
                  <p
                    data-testid={ `${index}-recommendation-title` }
                    className="text-center fs-2"
                  >
                    { arr[index].strMeal || arr[index].strDrink }
                  </p>
                </div>
                {arr[index + 1] && (
                  <div
                    data-testid={ `${index + 1}-recommendation-card` }
                    className="w-50"
                  >
                    <img
                      src={ arr[index + 1].strMealThumb || arr[index + 1].strDrinkThumb }
                      alt={ `imagem da receita ${arr[index + 1]
                        .strMeal || arr[index + 1].strDrink}` }
                      className="d-block w-100"
                    />
                    <p
                      data-testid={ `${index + 1}-recommendation-title` }
                      className="text-center fs-2"
                    >
                      { arr[index + 1].strMeal || arr[index + 1].strDrink }
                    </p>
                  </div>
                )}
              </div>
            </Carousel.Item>
          )
        ))}
      </Carousel>
      <button
        data-testid="start-recipe-btn"
        type="button"
        className="sucess w-50 button-start-recipe"
      >
        Start Recipe
      </button>
    </div>
  );
}

export default RecomendedRecipes;
