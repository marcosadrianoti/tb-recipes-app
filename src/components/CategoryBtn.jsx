import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from '../context/RecipesContext';

function CategoryBtn({ strCategory, drinkOrMeal }) {
  const { setApiURLMeals, setApiURLDrinks } = useContext(RecipesContext);

  const handleClick = () => {
    if (drinkOrMeal === 'meal') {
      setApiURLMeals(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`);
    } else {
      setApiURLDrinks(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${strCategory}`);
    }
  };

  return (
    <button
      type="button"
      data-testid={ `${strCategory}-category-filter` }
      className="category-button"
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
