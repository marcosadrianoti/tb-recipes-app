import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipesContext from '../context/RecipesContext';
import Recipes from './Recipes';
import CategoryBtn from '../components/CategoryBtn';

function Drinks() {
  const { drinks, drinksCategories, setApiURLDrinks } = useContext(RecipesContext);
  const count = 5;
  return (
    <>
      <div className="top-container">
        <div className="categories-buttons-container">
          {drinksCategories.slice(0, count).map(({ strCategory }) => (
            <CategoryBtn
              key={ strCategory }
              strCategory={ strCategory }
              drinkOrMeal="drink"
            />
          ))}
        </div>
        <button
          data-testid="All-category-filter"
          className="remove-filter-btn"
          onClick={ () => setApiURLDrinks('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=') }
        >
          Remove All Filters
        </button>
      </div>
      <Header />
      <Recipes recipes={ drinks } />
      <Footer />
    </>
  );
}

export default Drinks;
