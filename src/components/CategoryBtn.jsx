import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from '../context/RecipesContext';

function CategoryBtn({ strCategory, drinkOrMeal }) {
  const { setApiURLMeals, setApiURLDrinks,
    apiURLDrinks, apiURLMeals } = useContext(RecipesContext);

  const handleClick = () => {
    switch (drinkOrMeal) {
    case 'meal':
      if (apiURLMeals === `https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`) {
        setApiURLMeals('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        break;
      }
      setApiURLMeals(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`);
      break;
    default:
      if (apiURLDrinks === `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${strCategory}`) {
        setApiURLDrinks('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
        break;
      }
      setApiURLDrinks(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${strCategory}`);
    }
  };

  return (
    <button
      type="button"
      data-testid={ `${strCategory}-category-filter` }
      className="category-button sucess"
      onClick={ handleClick }
    >
      {strCategory}
    </button>
  );
}

CategoryBtn.propTypes = {
  strCategory: PropTypes.string.isRequired,
  drinkOrMeal: PropTypes.string.isRequired,
};

export default CategoryBtn;
